import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';
import Chart from 'chart.js'

export default class ChartDisplay extends React.Component {
	
	addData(x, y) {
		const chart = this.chart;
		chart.data.labels = x;
		chart.data.datasets[0].data = y;

		chart.update();
	}
	
	removeData() {
		const chart = this.chart;
		chart.data.labels.pop();
		chart.data.datasets[0].data = [];
		chart.update();
	}
	
	displayData() {
		if (this.props.chartData) {
			const {x, y} = this.props.chartData;
			this.removeData();
			this.addData(x, y);
		}
	}
	
	componentDidMount() {
		const {x, y} = this.props.chartData || {};
		// const x = ["a", "b"];
		// const y = [10, 20];
		
		const ctx = document.getElementById("myChart").getContext('2d');
		
		this.chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [],
				datasets: [{
					label: '',
					data: [],
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
	
	componentDidUpdate() {
		this.displayData();
	}
	
	render() {
		return (
			<div className="chart-container">
				<canvas id="myChart" width="100%" height="100%"></canvas>
			</div>
		)
	}
}
