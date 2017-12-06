
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Input,
  Label,
  Switch,
  
} from 'react-native-clean-form'
import * as firebase from 'firebase';
 // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYvQaRPag_1pvnBLkxWRQEAOjujYONYu8",
  authDomain: "contactmanager-a73ef.firebaseapp.com",
  databaseURL: "https://contactmanager-a73ef.firebaseio.com",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);  

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
    return firebaseApp.database().ref();
  }
   writeUserData() {
    firebase.database().ref('users').push({
      username: this.state.name,
      email: this.state.email,
      brief : this.state.brief
    }).then(()=>{
     // goBack();
    })

    };
  
  SaveUser () {
    this.itemsRef.push({
      name: "user.name",
      email: "user.email",
      brief: "user.brief"
    })
  }

  render() {

    console.log(this.state.name);
    return (
  <Form>
    <FieldsContainer>
      <Fieldset label="Contact details">
        <FormGroup>
          <Label>name</Label>
          <Input placeholder="you full name" onChangeText={(text) => this.setState({name:text})} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input  placeholder="your email" onChangeText={(text) => this.setState({email:text})} />
        </FormGroup>
        <FormGroup>
          <Label>brief</Label>
          <Input  placeholder="writing about you" onChangeText={(text)=> this.setState({})}  />
        </FormGroup>
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button  iconPlacement="right" onPress={this.writeUserData.bind(this)}>add</Button>
    </ActionsContainer>
  </Form>
    )
  }
}
