'use strict';
import React from "react";
import ReactDOM from "react-dom";

import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';

class App extends React.Component {

  render() {
    return (
      <div>
      <Search />
      <Progress
        position={'0.3'}
        elapsed={'00:20'}
        total={'01:00'}/>
        <Player />
        <Details title={'Track title'} />
      </div>
       );
   }
}

// Render to ID content in the DOM
ReactDOM.render( < App / > ,
   document.getElementById('content')
);
