import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Contact.module.css';

//default value of states || domyślna wartość stanów
const DEFAULT_VALUES = {
  name: '',
  number: '',
};

export default class Contact extends Component {
  //taking state's from DEFAULT_VALUES
  state = {
    ...DEFAULT_VALUES,
  };
  //--------------------

  // onChange
  onChange = event => {
    //setting event to take source of field
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // submit & reset form
  formSubmit = event => {
    //prevent from refreshing
    event.preventDefault();
    //sending data | wysyła dane ze stanu w formie propsów
    this.props.onSubmit({ ...this.state });
    //form reset
    this.formReset();
  };
  //--------------------

  // reset form
  formReset = () => {
    this.setState({
      ...DEFAULT_VALUES,
    });
  };
  //--------------------
  render() {
    const { name, number } = this.state;
    return (
      //Formularz
      <form className={style.container} onSubmit={this.formSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.onChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.onChange}
        />
        <button type="submit">save</button>
      </form>
    );
  }
}

Contact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
