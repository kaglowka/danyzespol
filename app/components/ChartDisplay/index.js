import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';
import Chart from 'chart.js'

export default class ChartDisplay extends React.Component {
	
	loadChart() {
		if (this.props.chartData) {
			
			const {x, y} = this.props.chartData;
			// const x = ["a", "b"];
			// const y = [10, 20];
			
			const ctx = document.getElementById("myChart").getContext('2d');
			
			const myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: x,
					datasets: [{
						label: '',
						data: y,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});
		}
	}
	
	componentDidMount() {
		this.loadChart();
	}
	
	componentDidUpdate() {
		this.loadChart();
	}
	
	render() {
		return (
			<div className="chart-container">
				<canvas id="myChart" width="100%" height="100%"></canvas>
			</div>
		)
	}
}
