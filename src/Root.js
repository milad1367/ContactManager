import React, { Component } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button,
    FlatList
  } from 'react-native';

  import { SafeAreaView, StackNavigator } from 'react-navigation';
  import AddNewContact from './components/AddNewContact';
  import TodoList from './components/TodoList';
  import myFirebaseApp from './components/myFirebaseApp';
  import User from './components/User';
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
     this.itemsRef.on('value',(snap)=>{
       console.log("snap"+snap);
       // get children as an array
     var items = [];
     snap.forEach((child) => {
        items.push({
          username: child.val().username,
          email: child.val().email,
          brief: child.val().brief,
         _key: child.key
      });
     });
       const ItemsReverse = items.reverse();
       this.setState({users:ItemsReverse});
     })
  }


  render() {
    const navigation = this.props.navigation;
    return(
    <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
      <View>
      <Button
        title="Add New Contact"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        onPress={()=>
        navigation.navigate('AddNewContact',{name: 'AddNewContact'})
        }
     />
        <FlatList
          data= {this.state.users}
          renderItem={({item}) => (
            <User
               name={item.username}
               email={item.email}
               brief={item.brief}
             />
           )}
        />
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
