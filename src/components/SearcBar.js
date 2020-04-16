import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar({ onSearchTextChanged }) {
	return (
		<div>
			<Form.Group>
				<Form.Control size="lg" type="text" placeholder="Search" onChange={e => onSearchTextChanged(e.target.value)} />
			</Form.Group>
		</div>
	)
}

export default SearchBar;