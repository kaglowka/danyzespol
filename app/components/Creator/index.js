import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';

import DatasetPreview from '../DatasetPreview';

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
	render() {

		return (
			<div className="creator">
				<section className="chart-section">
					<div className="section-container">
						<div className="chart-section-description">
							<h3>Co chcesz zobaczyć?</h3>
							<p>Histogram jest jednym z najbardziej popularnych wykresów statystycznych. Służy on do przedstawienia liczebności obserwacji w zadanych przedziałach.</p>
						</div>
						<div className="chart-slider">
							Różne wykresy
						</div>
					</div>
				</section>
				<section className="data-section">
					<div className="section-container">
						<DatasetPreview columns={columns}/>
					</div>
				</section>
				<section className="editor-section">
					<div className="section-container">
						Edytor wykresu
					</div>
				</section>
			</div>
		)
	}
}
