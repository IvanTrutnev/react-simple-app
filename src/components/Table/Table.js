import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';

const NewsTable = ({news}) => (
  <table className="table">
    <thead>
    <tr>
      <th>Author</th>
      <th>Title</th>
      <th>Points</th>
    </tr>
    </thead>
    <tbody>
    {news.map(({author, title, points, objectID}) =>
      <tr key={objectID}>
        <td>{author}</td>
        <td>{title}</td>
        <td>{points}</td>
      </tr>
    )}
    </tbody>
  </table>
);

NewsTable.propTypes = {
  news: PropTypes.array.isRequired
};

NewsTable.defaultProps = {
  news: []
};


export default NewsTable;


