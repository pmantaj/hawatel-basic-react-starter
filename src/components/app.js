import React from 'react';
import { Component } from 'react';

import MainTable from './../containers/main_table_example';

export default class App extends Component {

  render() {
    return (
      <div>
          <MainTable name="Name of the table as argument"/>
      </div>
    );
  }
}
