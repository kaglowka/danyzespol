import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';


export default class ChartEditor extends React.Component {

	renderYAxisOptions(columns) {
		return (
			columns
				.filter((column) => column.type === 'number')
				.map((column) => (
					<div key={column.header}>{column.header}</div>
				),
				)
		)

	}
	render() {
		return (
			<div className="chart-editor">
				<div>
					<h4>Oś pozioma</h4>
					<p>Służy do wskazania przedziału danych. Na przykład jeśli chcesz zobaczyć jak wybrane przez Ciebie dane rozkładają się w kolejnych latach, wybierz na oś poziomą kolumnę zawierającą daty. Na osi poziomej możesz umieścić zarówno dane z kolumny w formacie tekst jak i liczba.</p>

				</div>
				<div>
					<h4>Oś pionowa</h4>
					<p>Służy do przedstawiania liczebności obserwacji. Możesz na niej umieścić informacje o sumie wszystkich wyników lub dane z kolumn, których fromat to liczba.</p>
					{this.props.columns && this.renderYAxisOptions(this.props.columns)}
				</div>
			</div>
		)
	}
}
