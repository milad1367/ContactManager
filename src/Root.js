import React, { Component } from 'react';

import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button
  } from 'react-native';

  import { SafeAreaView, StackNavigator } from 'react-navigation';
  import AddNewContact from './components/AddNewContact';
  import TodoList from './components/TodoList';
  import myFirebaseApp from './components/myFirebaseApp';

class MainScreen extends  Component {
  constructor(props){
    super(props);
    this.state = {
      users:""
    };
    this.itemsRef = this.getRef().child('users');

  }
  getRef() {
    return myFirebaseApp.database().ref();
  }

  componentDidMount() {
     myFirebaseApp.database().ref('users').once('value').then((snapshot)=> {
       this.setState({users : snapshot.val()}); // && snapshot.val().username) || 'Anonymous';
       var items = [];
       console.log(snapshot.val());
       var test = snapshot;
        snapshot.forEach((item)=>{
         items.push ({

           username:item.val().username
         })
       })

       this.setState({users:snapshot.val()});

    //   console.log(this.items);

    });
    /*
   this.itemsRef.on("value",(snap)=>{
     var items = [];
     console.log(snap);
      snap.forEach((child)=>{
        //console.log(child);
        items.push({
          name:child.val().username
        })
      })
      this.setState({
        users:items,
        function(){
          console.log(this.state.users);

          users2 = this.state.users.map((item)=>{
           <Text> {item} </Text>

         })
        }
      });
   })
   */
  }


  render() {
    const navigation = this.props.navigation;
    //let stateToString = this.state.users.toString();
    const items = this.state.users;
    console.log("items" + items);
    if (items.legth>1){
    const items2 =  items.forEach((item)=>{
        return (
          <ul>
            item
          </ul>
        )
      })
      console.log("items2" + items2);
    }

    return(
    <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
      <TodoList />
      <View>
    <Button
    title="Add New Contact"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    onPress={()=>
      navigation.navigate('AddNewContact',{name: 'AddNewContact'})
    }
  />
   {this.item2}
  </View>
    </ScrollView>
  )
}
}

const AppNavigator = StackNavigator(
    {
      AddNewContact:{
        screen: AddNewContact
      },
      Index: {
        screen: MainScreen,
      },
    },
    {
      initialRouteName: 'Index',
      headerMode: 'none',

      /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  );

  export default AppNavigator
