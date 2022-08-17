
import { Formik, ErrorMessage } from 'formik';
import { Label, Button, Input, Forms } from './ContactForm.styled';
import * as yup from 'yup';
import React, { Component } from "react";

const scema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(7).max(7).required(),
})


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    contacts: []
  };
  
  handelSabmit = (values, {resetForm}) => { 
    this.props.onSubmit(values)
    this.setState({ values: values });
    console.log(this.state)
    resetForm();
  };

 

  render() {
    return <Formik
        validationSchema={scema}
        initialValues={this.state}
        onSubmit={this.handelSabmit}
        >
        <Forms action="">
            <ErrorMessage component='div' name='name'/>
            <Label htmlFor="text">Name
                <Input
                    type="text"
                    name="name"
                    // value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                />
            </Label>
            <ErrorMessage component='div' name='number'/>
            <Label htmlFor="number">Number
                <Input
                  type="tel"
                  name="number"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  // value={this.state.number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  required />
            </Label>  
            <Button type='submit' >Add contact</Button>
        </Forms>
    </Formik> ;
  }
}
