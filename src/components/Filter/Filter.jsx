import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

export default class Filter extends Component {
  state = {
    filter: '',
  };
  handleChange = event => {
    const value = event.target.value;
    this.props.onFilterChange(value);
  };

  render() {
    //console.log('Filtr: ' + value);
    return (
      <div className={style.filter}>
        <span>Find Contact</span>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
};
