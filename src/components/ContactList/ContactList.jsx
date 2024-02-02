import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import Contact from '../Contact/Contact';

class ContactList extends Component {
  handleRemove = contact => {
    this.props.handleRemove(contact);
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul className={style}>
        {contacts.length === 0 ? (
          <p>You don't have contacts</p>
        ) : (
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact name={contact.name} number={contact.number} />
                <button onClick={() => this.handleRemove(contact)}>[X]</button>
              </li>
            );
          })
        )}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
