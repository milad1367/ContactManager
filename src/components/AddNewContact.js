
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

import FirebaseApp from './FirebaseApp';

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
    return FirebaseApp.database().ref();
  }
   writeUserData() {
    FirebaseApp.database().ref('users').push({
      username: this.state.name,
      email: this.state.email,
      brief : this.state.brief
    }).then(()=>{
      this.props.navigation.goBack(null);

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
    const navigation = this.props.navigation;

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
          <Input  placeholder="writing about you" onChangeText={(text)=> this.setState({brief:text})}  />
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
