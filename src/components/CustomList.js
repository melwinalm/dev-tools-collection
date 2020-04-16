import React from 'react';
import CustomItem from './CustomItem';
import { Row, Col } from 'react-bootstrap';

function CustomList({ items, color }) {
	return (
		<div>
			{
				items.map(val => <div className="m-3">
					<CustomItem item={val} color={color}/>
				</div>)
			}
		</div>
	)
}

export default CustomList;