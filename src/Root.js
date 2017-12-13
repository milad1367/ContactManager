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
  import FirebaseApp from './components/FirebaseApp';

class MainScreen extends  Component {
  constructor(props){
    super(props);
    this.state = {
      users:""
    };
  }
  componentDidMount() {
   FirebaseApp.database().ref('users').on("value",(snap)=>{
     var items = [];
      snap.forEach((child)=>{
        items.push({
          name:child.val().username
        })
      })
      this.setState({
        users:items,
        function(){
          console.log("hiiiiiiiiiii");
          users2 = this.state.users.map((item)=>{
           <Text> {item} </Text>

         })
        }
      });
   })


   console.log("state"+this.state.users);
  }


  render() {
    const navigation = this.props.navigation;
    let stateToString = this.state.users.toString();
    let users2;


    return(
    <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
      <TodoList />
      <View>
    <Button
    title="Add New Contact"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    onPress={()=>
      navigation.navigate('AddNewContact',{name: 'Brent'})
    }
  />
  <Text> {users2} </Text>
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
