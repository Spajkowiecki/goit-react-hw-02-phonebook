import { Component } from 'react';
import style from './Contact.module.css';

class Contact extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <div className={style.contact}>
        <span>
          {name} : {number}
        </span>
      </div>
    );
  }
}

export default Contact;
