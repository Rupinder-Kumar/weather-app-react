import React, {Component} from 'react';

export default class Select extends Component {
  render() {
    const {value, onChange, options} = this.props;
    return (
      <span>
        <select className="form-control" onChange={(e) => onChange(e.target.value)} value={value}>          {
            options.map((option) => (
              <option className="single-item" value={option} key={option}>
                {option}
              </option>
            ))
          }
        </select>
      </span>
    );
  }
}
