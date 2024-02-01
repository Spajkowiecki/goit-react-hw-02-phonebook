import { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import style from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addToContacts = data => {
    const { contacts } = this.state;

    if (
      contacts.filter(element =>
        element.name.toLowerCase().includes(data.name.toLowerCase())
      )
    ) {
      return alert('Contact already exist!');
    }

    data = {
      id: 'id-' + (contacts.length + 1),
      ...data,
    };
    console.log('Contact: ', data);
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  handleRemove = contact => {
    const { id } = contact;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  handleFilter = filter => {
    this.setState({ filter: filter });
  };

  // filteredContacts = toFilter => {

  // };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={style.main}>
        <Section name="Controls">
          <ContactForm onSubmit={this.addToContacts} />
          <button onClick={() => console.log(contacts)}>Sprawdz liste</button>
        </Section>
        <Section name="Contacts">
          <Filter filter={this.handleFilter} />
          <ContactList
            contacts={contacts.filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )}
            handleRemove={this.handleRemove}
          />
        </Section>
      </div>
    );
  }
}

export default App;
