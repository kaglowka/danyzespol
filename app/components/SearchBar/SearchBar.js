import React from 'react';
import './style.scss';
import {APIgetResources} from "api";

class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
    };
    this.onItemSelect = props.onItemSelect;
    this.timer = null;
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    clearTimeout(this.timer);
    const searchText = event.target.value;
    this.setState({searchText});
    this.timer = setTimeout(() => {
      const results = APIgetResources(searchText).then(result => {
      	this.setState({searchResults: result.data});
    	});
    }, 500);
  }
	
  componentDidMount() {
    const results = APIgetResources().then(result => {
      this.setState({searchResults: result.data});
    });
  }
  
  renderResults() {
    const items = [];
    for (const resource of this.state.searchResults) {
      // console.log(resource);
      items.push((
        <li key={resource.id} onClick={(e) => this.onItemSelect(resource.id)}>
          {resource.attributes.title}
        </li>
      ));
    }
    return items;
  }
  
  render() {
    return (
      <div>
        <div>
          <label>
            Czego szukasz?
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Np. xyz" />
          </label>
        </div>
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
