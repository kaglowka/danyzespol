import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';


export default class Filters extends React.Component {
	render() {
		return (
			<div className="chart-filters">
				<div>
					<h4>Filtruj</h4>
					<p>Użyj opcji filtrowania, aby zobaczyc tylko te wyniki, które Cię interesują.</p>
					<div className="filter-options">
						{this.props.columns && this.props.columns.map((column) =>
							(
								<div className="filter">
									<span className="col-header">{column.header}</span>
									<input className="filter-input" />
								</div>
							))}
					</div>
				</div>
			</div>
		)
	}
}
