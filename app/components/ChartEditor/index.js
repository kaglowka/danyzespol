import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';


export default class ChartEditor extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedOnX: undefined,
			selectedOnY: undefined,
		}
	}

	handleXOptionClick(option) {
		this.setState({selectedOnX: option})
	}

	handleYOptionClick(option) {
		this.setState({selectedOnY: option})
	}

	renderYAxisOptions(columns) {
		return (
			<div className="axis-options">
				<div className={cnames("option-tile", this.state.selectedOnY === "sum" ? 'selected' : '')} onClick={() => this.handleYOptionClick("sum")}>
					Zlicz wszystkie
				</div>
				{columns
					.filter((column) => column.type === 'number')
					.map((column) => (
						<div className={cnames("option-tile", column.header === this.state.selectedOnY ? 'selected' : '')} onClick={() => this.handleYOptionClick(column.header)}>
							{column.header}
						</div>
					),
					)}
			</div>
		)
	}

	renderXAxisOptions(columns) {
		return (
			<div className="axis-options">
				{columns
					.map((column) => (
						<div className={cnames("option-tile", column.header === this.state.selectedOnX ? 'selected' : '')} onClick={() => this.handleXOptionClick(column.header)}>
							{column.header}
						</div>
					),
					)}
			</div>
		)
	}


	render() {
		return (
			<div className="chart-editor">
				<div>
					<h4>Oś pozioma</h4>
					<p>Służy do wskazania przedziału danych. Na przykład jeśli chcesz zobaczyć jak wybrane przez Ciebie dane rozkładają się w kolejnych latach, wybierz na oś poziomą kolumnę zawierającą daty. Na osi poziomej możesz umieścić zarówno dane z kolumny w formacie tekst jak i liczba.</p>
					{this.props.columns && this.renderXAxisOptions(this.props.columns)}
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
