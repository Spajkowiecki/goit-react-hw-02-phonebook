import { Component } from 'react';
import PropTypes from 'prop-types';
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

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
