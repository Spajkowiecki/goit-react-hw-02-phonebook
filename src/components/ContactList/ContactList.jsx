import { Component } from 'react';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

class ContactList extends Component {
  handleRemove = contact => {
    this.props.handleRemove(contact);
  };

  render() {
    const { contacts } = this.props;
    return (
      <ul>
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

export default ContactList;