
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
 
const AddNewContact = (props) => (
  <Form>
    <FieldsContainer>
      <Fieldset label="Contact details">
        <FormGroup>
          <Label>name</Label>
          <Input placeholder="you full name" onChangeText={this.onFirstNameChange} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input  placeholder="your email" onChangeText={this.onEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label>brief</Label>
          <Input  placeholder="writing about you"  />
        </FormGroup>
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right" onPress={this.save}>add</Button>
    </ActionsContainer>
  </Form>
)

export default AddNewContact;

