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
	
	loadResource(id) {
		APIgetResource(id).then(result => {
			this.setState({resource: result.data});
			return analysisGetResource(id)
		}).then(result => {
			// console.log(result);
			this.setState({columns: result.columns});
		});
	}
	
	componentDidMount() {
		const resourceId = this.props.match.params.id;
		if (resourceId) {
			this.loadResource(resourceId);
		}
	}
	
	onSelect = (id) => {
		this.loadResource(id);
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
