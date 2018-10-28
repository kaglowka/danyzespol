import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'
import {analysisGetChartData} from 'api';
import ChartDisplay from '../ChartDisplay';


import './style.scss';

import ChartSlider from '../ChartSlider';
import DatasetPreview from '../DatasetPreview';
import {OPTION_SUM, default as ChartEditor} from '../ChartEditor';


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

export default class Creator extends React.Component {
	constructor() {
		super();

		this.state = {
			shouldFetchData: false,
			selectedOnX: undefined,
			selectedOnY: undefined,
			chartData: undefined,
		}
	}

	handleXOptionChange = (option) => {
		this.setState({shouldFetchData: true, selectedOnX: option})
	}

	handleYOptionChange = (option) => {
		this.setState({shouldFetchData: true, selectedOnY: option})
	}
	
	generateChart() { // selectedX, selectedY) {
		console.log('generateCHart: ', this.state);
		const x = this.state.selectedOnX;
		let data = {
			type: 'histogram',
			x: this.state.selectedOnX,
		};
		
		const y = this.state.selectedOnY;
		if (y === OPTION_SUM) {
			data.operation = 'unique';
		} else {
			data.y = y;
		}
		const { resourceId } = this.props;
		if (resourceId && x && y) {
				analysisGetChartData(resourceId, data).then(result => {
				this.setState({shouldFetchData: false, chartData: result})
			});
		}
	}
	
	componentDidMount() {
		if (this.state.shouldFetchData) {
			this.generateChart();
		}
	}
	
	componentDidUpdate() {
		console.log('update ', this.state)
		if (this.state.shouldFetchData) {
			this.generateChart();
		}
	}

	render() {
		console.log(this.props.columns);
		return (
			<div className="creator">
				<section className="chart-section">
					<div className="section-container">
						<div className="chart-section-description">
							<h2>Co chcesz zobaczyć?</h2>
							<p>Histogram jest jednym z najbardziej popularnych wykresów statystycznych. Służy on do przedstawienia liczebności obserwacji w zadanych przedziałach.</p>
						</div>
						<ChartSlider />
					</div>
				</section>
				<section className="data-section">
					<div className="section-container">
						<DatasetPreview columns={this.props.columns}/>
					</div>
				</section>
				<section className="editor-section">
					<div className="section-container">
						<button className={cnames('action-button', 'primary-button')}>Udostępnij wykres</button>
						<ChartEditor
							columns={this.props.columns}
							selectedOnX={this.state.selectedOnX}
							selectedOnY={this.state.selectedOnY}
							onYOptionSelect={this.handleYOptionChange}
							onXOptionSelect={this.handleXOptionChange}
						/>
						<ChartDisplay
							chartData={this.state.chartData}
						/>
					</div>
				</section>
			</div>
		)
	}
}
