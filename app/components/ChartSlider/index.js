import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'
import histogram from '../../assets/graph.png'
import pie from '../../assets/pie-chart.png'
import map from '../../assets/placeholders.png'
import linear from '../../assets/graph2.png'
import percent from '../../assets/procent.png'
import interesting from '../../assets/growth.png'

import './style.scss';

const charts = [
	{
		title: 'słupkowy',
		icon: histogram,
	},
	{
		title: 'kołowy',
		icon: pie,
	},
	{
		title: 'mapa',
		icon: map,
	},
	{
		title: 'oś czasu',
		icon: linear,
	},
	{
		title: 'procent',
		icon: percent,
	},
	{
		title: 'analiza',
		icon: interesting,
	},
]

export default class ChartSlider extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedChart: 'słupkowy',
		}
	}

	handleChartSelect = (chart) =>
		this.setState({selectedChart: chart.title})

	render() {
		return (
			<div className="chart-slider">
				{charts.map((chart) => (
					<div
						key={chart.title}
						className={cnames('chart-tile', this.state.selectedChart === chart.title ? 'selected' : '')}
						onClick={() => this.handleChartSelect(chart)}
					>
						<img src={chart.icon} />
						{chart.title}
					</div>
				),

				)}
			</div>
		)
	}
}
