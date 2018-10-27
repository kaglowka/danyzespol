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
import DatasetPreview from '../DatasetPreview';
import {getResource} from 'api';

const columns = [
	{
		header: 'Imię',
		type: 'string',
		unique: 1000,
		rangeFrom: 'Aaron',
		rangeTo: 'Żaneta',
	},
	{
		header: 'Rok',
		type: 'number',
		unique: 17,
		rangeFrom: 2000,
		rangeTo: 2017,
	},
	{
		header: 'Liczba',
		type: 'number',
		unique: 17000,
		rangeFrom: 5,
		rangeTo: 18600,
	},
	{
		header: 'Płeć',
		type: 'string',
		unique: 2,
		rangeFrom: 'K',
		rangeTo: 'M',
	},
]

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
			this.setState({resource: result.data})
		});
	}

	render() {
		return (
			<div className="app-wrapper">
				<SearchBar onItemSelect={this.onSelect} />
        {this.state.resource && <div>{this.state.resource.attributes.title}</div>}
        <DatasetPreview columns={columns}/>
			</div>
		);
	}
}


export default App;
