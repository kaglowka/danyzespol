import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';


export default class DatasetPreview extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const columns = this.props.columns;
		if (columns) {
			var gridStyle = {
				gridTemplateColumns: '150px' + ' auto'.repeat(this.props.columns.length),
			}
			
			return (
				<div className="dataset-preview">
					<div className="preview-table" style={gridStyle}>
						<div className="row-title">Nagłówek kolumny</div>
						{columns.map((column) => (
							<div key={column.header} className={cnames('column-header', 'cell')}>
								{column.header}
							</div>),
						)}
						<div className="row-title">Rodzaj danych</div>
						{columns.map((column) => (
							<div key={column.header} className={cnames('column-type', 'cell', column.type)}>
								{column.type === 'string' ? 'tekst' : 'liczba'}
							</div>),
						)}
						<div className="row-title">Liczba niepowtarzalnych wyników</div>
						{columns.map((column) => (
							<div key={column.header} className={cnames('column-unique', 'cell')}>
								{column.unique}
							</div>),
						)}
						<div className="row-title">Zakres</div>
						{columns.map((column) => (
							<div key={column.header} className={cnames('column-range', 'cell')}>
								{column.rangeFrom} - {column.rangeTo}
							</div>),
						)}
					</div>
				</div>
			)
		} else {
			return (
				<div></div>
			);
		}
	}
}
