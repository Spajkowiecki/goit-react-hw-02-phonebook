import style from './App.module.css';
import Contact from './Contact/Contact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';
import { Component } from 'react';

const DEFAULT_VALUES = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-6', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-7', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-8', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
class App extends Component {
  state = {
    ...DEFAULT_VALUES,
  };

  removeContact = contactID => {
    console.log(`removing: ${contactID}`);
    //updating the contacts
    this.setState(prev => {
      const update = prev.contacts.filter(contact => contact.id !== contactID);
      return {
        contacts: update,
      };
    });
  };

  onFilterChange = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  addContact = contact => {
    //check if contact exist
    const contactExist = this.state.contacts.some(c => c.name === contact.name);
    if (contactExist) {
      Notiflix.Notify.failure(
        `this contact name ${contact.name}, already exist!`,
        { position: 'center-top' }
      );
    } else {
      this.setState(oldArray => ({
        contacts: [...oldArray.contacts, contact],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className={style.app}>
        <div className={style.left}>
          <Contact onSubmit={this.addContact} />
        </div>
        <div className={style.right}>
          <div className={style.rightUp}>
            <Filter onFilterChange={this.onFilterChange} />
          </div>
          <div className={style.rightDown}>
            {filteredContacts.length !== 0 ? (
              <ContactList
                contacts={filteredContacts}
                handleRemove={this.removeContact}
              />
            ) : (
              <h2>No specified contact</h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
