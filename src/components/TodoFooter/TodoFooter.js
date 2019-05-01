import React from 'react';
import PropTypes from 'prop-types';

import './TodoFooter.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

const TodoFooter = ({ amount, activeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
);

TodoFooter.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
}

TodoFooter.defaultProps = {
  amount: 0,
  activeFilter: 'all',
}

export default TodoFooter;