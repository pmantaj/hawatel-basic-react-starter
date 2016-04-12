import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import MainTable from './../containers/main_table';
import HeadComponent from '../components/head';

export default class App extends Component {
  render() {
    return (
      <div>
          <HeadComponent args='example argument' />
          <SearchBar />
          <br />
          <MainTable name="Name of the table as argument"/>
      </div>
    );
  }
}
