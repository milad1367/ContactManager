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


const MainScreen = ({ navigation }) => (
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
  </View>
    </ScrollView>    
);


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