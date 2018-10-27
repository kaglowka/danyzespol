/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import './style.scss';
import SearchBar from '../SearchBar';
import {getResource} from "api";

class App extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      resource: null,
    }
  }
  
  onSelect(id) {
    console.log(id);
    getResource(id).then(result => {
      this.setState({ resource: result.data })
    });
  }
  
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar onItemSelect={this.onSelect}/>
        {this.state.resource && <div>{this.state.resource.attributes.title}</div>}
      </div>
    );
  }
}


export default App;
