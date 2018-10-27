import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';


export default class DatasetPreview extends React.Component {
	render() {
		var gridStyle = {
			gridTemplateColumns: '150px' + ' auto'.repeat(this.props.columns.length),
		}


		return (
			<div className="dataset-preview">
				<div className="preview-table" style={gridStyle}>
					<div className="row-title">Nagłówek kolumny</div>
					{this.props.columns.map((column) => (
						<div className={cnames('column-header', 'cell')}>
							{column.header}
						</div>),
					)}
					<div className="row-title">Rodzaj danych</div>
					{this.props.columns.map((column) => (
						<div className={cnames('column-type', 'cell', column.type)}>
							{column.type === 'string' ? 'tekst' : 'liczba'}
						</div>),
					)}
					<div className="row-title">Liczba niepowtarzalnych wyników</div>
					{this.props.columns.map((column) => (
						<div className={cnames('column-unique', 'cell')}>
							{column.unique}
						</div>),
					)}
					<div className="row-title">Zakres</div>
					{this.props.columns.map((column) => (
						<div className={cnames('column-range', 'cell')}>
							{column.rangeFrom} - {column.rangeTo}
						</div>),
					)}
				</div>
			</div>
		)
	}
}
