
import React, { Component } from 'react';
import { Text,TextInput, View , Button } from 'react-native';
import * as firebase from 'firebase';
import myFirebaseApp from './myFirebaseApp';
export default class AddNewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      brief:""
    }
    this.itemsRef = this.GetRef().child('users');
  }
  GetRef() {
    return myFirebaseApp.database().ref();
  }
   writeUserData(){
    this.itemsRef.push({
      username: this.state.name,
      email: this.state.email,
      brief : this.state.brief
    }).then(()=>{
      this.props.navigation.goBack(null)
    });
  }
  SaveUser () {
    this.itemsRef.push({
      name: "user.name",
      email: "user.email",
      brief: "user.brief"
    })
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View>
        <TextInput
          style={{height: 40, borderWidth: 1}}
          onChangeText={(text) => this.setState({name:text})}
          value={this.state.name}
         />
         <TextInput
           style={{height: 40, borderWidth: 1}}
           onChangeText={(text) => this.setState({email:text})}
           value={this.state.email}
         />
         <TextInput
           style={{height: 40, borderWidth: 1}}
           onChangeText={(text) => this.setState({brief:text})}
           value={this.state.brief}
          />
          <Button
            onPress={()=>this.writeUserData()}
            title="add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
     </View>
    )
  }
}

/*
render() {
  const navigation = this.props.navigation;
  return (
    <View>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        onChangeText={(text) => this.setState({name:text})}
        value={this.state.name}
       />
       <TextInput
         style={{height: 40, borderWidth: 1}}
         onChangeText={(text) => this.setState({email:text})}
         value={this.state.email}
       />
       <TextInput
         style={{height: 40, borderWidth: 1}}
         onChangeText={(text) => this.setState({brief:text})}
         value={this.state.brief}
        />
        <Button
          onPress={()=>this.writeUserData()}
          title="add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
   </View>
  )
}
}
