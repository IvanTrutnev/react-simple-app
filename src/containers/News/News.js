import React, { Component } from 'react';
import './App.css';
import NewsTable from '../../components/Table/Table';
import Input from '../../components/Input/Input';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

class App extends Component {

  state = {
    result: {},
    searchQuery: ''
  };

  componentDidMount() {
    const {searchQuery} = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => console.log(error));
  };

  setNews = result => {
    this.setState({result})
  };

  handleInputChange = ({target: {value}}) => {
    this.setState({
      searchQuery: value
    })
  };

  search = ({key}) => {
    if (key === 'Enter') {
      const {searchQuery} = this.state;
      this.fetchData(searchQuery);
    }
  };

  render() {
    const {result, searchQuery} = this.state;
    const {hits = []} = result;

    return (
      <div className="App">
        <Input
          value={searchQuery}
          onChange={this.handleInputChange}
          onKeyPress={this.search}
        />
        <NewsTable news={hits}/>
      </div>
    );
  }
}

export default App;