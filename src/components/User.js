import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class User extends Component {
    render() {
      return (
        <View>
          <Text>name : {this.props.name}</Text>
          <Text>email : {this.props.email}</Text>
          <Text>brief : {this.props.brief}</Text>
        </View>
      )
    }
  }
