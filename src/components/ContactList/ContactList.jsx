import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ContactList.module.css';

export default class ContactList extends Component {
  handleRemove = contactID => {
    this.props.handleRemove(contactID);
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul className={style.contactList}>
        {contacts.map((contact, index) => (
          <li key={contact.id + ' ' + index} className={style.element}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button
              onClick={() => this.handleRemove(contact.id)}
              className={style.remove}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
