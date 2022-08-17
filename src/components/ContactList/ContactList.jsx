import React from 'react';
import PropTypes from 'prop-types';
import { Li, Ul } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContactList }) => {
  return (<Ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id} className="ContactList__item">
        <p className="ContactList__text">
          {name} : <span> {number} </span>
        </p>
        <button
          type="button"
          onClick={() => onDeleteContactList(id)}
        >
          Удалить
        </button>
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