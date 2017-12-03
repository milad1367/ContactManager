
import React, { Component } from 'react';

import {
    Text,
    View,
    Button
  } from 'react-native';
  import { SafeAreaView, StackNavigator } from 'react-navigation';
  
  const AddButton = ({navigation}) => (
    <View style={{}}>
    <Button
    title="add new contact"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    onPress={()=>
      navigation.navigate('AddNewContact',{name: 'Brent'})
    }
  />
</View>
  )

  export default AddButton