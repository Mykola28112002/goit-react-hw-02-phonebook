
import { Div } from './App.styled';
import React, { Component } from "react";
// import { nanoid } from 'nanoid'
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
export class App extends Component {
  static defaultProps = {
    initialContacts: [],
    initialName: ''
  };
  state = {
    contacts: this.props.initialContacts,
    name: this.props.initialName,
  }

  render() {
    return <Div className='thema'>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Contacts/>
      </Section>
    </Div>
  }
}