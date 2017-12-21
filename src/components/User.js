import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class User extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.name?this.props.name:'name :'}</Text>
          <Text style={styles.title}>{this.props.email?this.props.email:'email :'}</Text>
          <Text style={styles.title}>{this.props.brief?this.props.brief:'brief :'}</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor:'white',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft:20,
  },
  activeTitle: {
    color: 'red',
  },
});
