import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function CustomItem({ item, color }) {
	return (
		<Card>
			<Card.Header>{item.name}

				{
					item.tags.map(tab => <>
						{'  '}<Badge pill variant={color}>
							{tab}
						</Badge>
					</>)
				}
			</Card.Header>
			<Card.Body>
				<Card.Text>
					{
						item.description == "" ? "No description available" : item.description
					}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				{
					item.apptype == "url" && <Button href={item && item.more && item.more.url} size="sm" variant={color}>Go to the app</Button>
				}
			</Card.Footer>
		</Card>
	)
}

export default CustomItem;