import React from 'react';
import './style.scss';
import {APIgetResources} from "api";

class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    	searchVisible: false,
      searchText: '',
      searchResults: [],
    };
    this.onItemSelect = props.onItemSelect;
    this.timer = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
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
  
  handleItemSelect (id) {
		this.setState({searchVisible: false});
		this.onItemSelect(id);
	}
	
  renderResults() {
    const items = [];
    for (const resource of this.state.searchResults.slice(0, 5)) {
      // console.log(resource);
      items.push((
        <li key={resource.id} onClick={(e) => this.handleItemSelect(resource.id)}>
          {resource.attributes.title}
        </li>
      ));
    }
    return items;
  }
  
  render() {
		const {searchVisible} = this.state;
	
		return (
			<div className='search-bar'>
				{searchVisible &&
					<div className='search-box-container'>
						<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Czego szukasz?"/>
						<ul className='search-results'>
							{this.renderResults()}
						</ul>
					</div>
				}
				{!searchVisible &&
					<div>
						<button
							className='change-data'
							onClick={(e) => this.setState({searchVisible: true})}
						> Zmień dane
						</button>
					</div>
				}
			</div>
		);
	}
 
}

export default SearchBar;
