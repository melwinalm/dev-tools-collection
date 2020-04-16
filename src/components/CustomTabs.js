import React from 'react';
import CustomList from './CustomList';
import { Tabs, Tab } from 'react-bootstrap';

const TAB_MAPPING = {
	"browser-app": {
		"color": "secondary",
		"tabTitle": "Browser Based Tools"
	},
	"documentation": {
		"color": "success",
		"tabTitle": "Documentation"
	},
}

function CustomTabs({ content }) {
	return (
		<div>
			<Tabs defaultActiveKey="all">
				<Tab eventKey="all" title={`All (${content.length})`}>
					<CustomList
						key="all"
						items={content}
						color={"primary"}
					/>
				</Tab>
				{
					Object.keys(TAB_MAPPING).map(key => (
						<Tab eventKey={key} title={TAB_MAPPING[key].tabTitle + ` (${content.filter(item => item.category == key).length})`}>
							<CustomList
								key={key}
								items={content.filter(item => item.category == key)}
								color={TAB_MAPPING[key].color}
							/>
						</Tab>
					))
				}
			</Tabs>


		</div>
	)
}

export default CustomTabs;