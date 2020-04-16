import React, { useState, useEffect } from 'react';
import SearchBar from './SearcBar';
import CustomTabs from './CustomTabs';
import myData from './../content.json';

function Main() {
	const [allContent, setAllContent] = useState([]);
	const [filteredContent, setFilteredContent] = useState([]);

	useEffect(() => {
		setAllContent(myData);
		setFilteredContent(myData);
	}, []);

	const onSearchTextChanged = value => {
		value = value.toLowerCase();

		if (value == undefined || value == null || value == "") {
			setFilteredContent(allContent);
		}
		else {
			let _filteredItems = allContent.filter(item => {
				if (item.name.toLowerCase().includes(value)) {
					return true;
				}
				else if (item.description.toLowerCase().includes(value)) {
					return true;
				}
				else if (item.tags.includes(value)) {
					return true;
				}
			});

			setFilteredContent(_filteredItems)

		}
	}

	return (
		<div className="p-4">
			<SearchBar onSearchTextChanged={onSearchTextChanged} />
			<CustomTabs content={filteredContent} />
		</div>
	)

}

export default Main;