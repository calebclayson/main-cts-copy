import React, { Component } from 'react';
import JournalList from './journals/journal_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>
        <JournalList heading="List 1" />
      </div>
    );
  }
}

//note at 12:49 left of Deep Dive: Props, State and this - Part 2