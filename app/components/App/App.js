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
	constructor(props) {
		super();
		
		const resourceId = props.match.params.id;

		this.state = {
			resourceId: resourceId,
			resource: null,
			columns: null,
		}
	}
	
	loadResource(id) {
		APIgetResource(id).then(result => {
			this.setState({
				resourceId: result.data.id,
				resource: result.data
			});
			return analysisGetResource(id)
		}).then(result => {
			this.setState({
				columns: result.columns,
			});
		});
	}
	
	componentDidMount() {
		const resourceId = this.state.resourceId;
		if (resourceId) {
			this.loadResource(resourceId);
		}
	}
	
	onSelect = (id) => {
		this.loadResource(id);
	}

	render() {
		return (
			<div className="app-wrapper">
				<SearchBar onItemSelect={this.onSelect} />
				{this.state.resource && <div>{this.state.resource.attributes.title}</div>}
				<Creator
					resourceId={this.state.resourceId}
					columns={this.state.columns}
				/>
			</div>
		);
	}
}


export default App;
