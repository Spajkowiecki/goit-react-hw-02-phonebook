import { Component } from 'react';
import style from './Filter.module.css';

class Filter extends Component {
  handleChange = event => {
    this.props.filter(event.target.value);
  };
  render() {
    const { value } = this.props;
    return (
      <div className={style.filter}>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
