import React from 'react'
import PropTypes from 'prop-types'
import cnames from 'classnames'

import './style.scss';


export default class DatasetPreview extends React.Component {
	render() {
		var gridStyle = {
			gridTemplateColumns: 'auto auto auto auto',
		}


		return (
			<div className="dataset-preview">
				<div className="preview-table" style={gridStyle}>
					{this.props.columns.map((column) => (
						<div className={cnames('column-header', 'cell')}>
							{column.header}
						</div>),
					)}
					{this.props.columns.map((column) => (
						<div className={cnames('column-type', 'cell', column.type)}>
							{column.type === 'string' ? 'tekst' : 'liczba'}
						</div>),
					)}
					{this.props.columns.map((column) => (
						<div className={cnames('column-unique', 'cell')}>
							{column.unique}
						</div>),
					)}
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
