import React, { Component } from 'react';

import Header from './header';
import Card from './card';


class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

// // things needed to fix
// placeholder
// gray / green numb labels
// content labels
// generate button space / card height

export default Home;