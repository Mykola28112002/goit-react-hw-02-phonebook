import React from 'react';
import PropTypes from 'prop-types';
import { Li, Ul, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContactList }) => {
  return (<Ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id} className="ContactList__item">
        <p className="ContactList__text">
          {name} : <span> {number} </span>
        </p>
        <Button
          type="button"
          onClick={() => onDeleteContactList(id)}
        >
          Delete
        </Button>
      </Li>
    ))}
  </Ul>)
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};