import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import { Query } from '../types/crabs';

const GET_CRABS = gql`
	query GetCrabs {
		crabs {
			name
			isExtinct
			order
			family
			infraOrder
			firstAppearance
			photo
			flavorText
		}
	}
`;

const Data = () => {
	const [crabs, setCrabs] = useState<any[]>([]);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: Query = await request(
					'https://crabs.onrender.com/graphql',
					GET_CRABS
				);
				setCrabs(data.crabs);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			{crabs.length > 0 &&
				crabs.map((crab, index) => (
					<div key={index}>
						{crab.name && <h2>{crab.name}</h2>}
						{crab.isExtinct !== null && (
							<p>Is Extinct: {crab.isExtinct ? 'Yes' : 'No'}</p>
						)}
						{crab.order && <p>Order: {crab.order}</p>}
						{crab.family && <p>Family: {crab.family}</p>}
						{crab.infraOrder && <p>Infra Order: {crab.infraOrder}</p>}
						{crab.firstAppearance && (
							<p>First Appearance: {crab.firstAppearance}</p>
						)}
					</div>
				))}
		</div>
	);
};

export default Data;
