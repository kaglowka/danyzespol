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
import Creator from '../Creator';
import {APIgetResource, analysisGetResource} from 'api';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			resource: null,
			columns: null,
		}
	}

	onSelect = (id) => {
		console.log(id);
		APIgetResource(id).then(result => {
			this.setState({resource: result.data});
			return analysisGetResource(id)
		}).then(result => {
			// console.log(result);
			this.setState({columns: result.columns});
		});
	}

	render() {
		console.log(this.state.resource)
		return (
			<div className="app-wrapper">
				<SearchBar onItemSelect={this.onSelect} />
				{this.state.resource && <div>{this.state.resource.attributes.title}</div>}
				<Creator columns={this.state.columns}/>
			</div>
		);
	}
}


export default App;
