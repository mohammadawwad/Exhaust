import React, { useEffect, useState } from 'react';
import Axios from '../../utils/Axios';
import Chart from '../charts/Chart';
import { countries } from '../../utils/Data';

export default function StatsPage() {
	const [data, setData] = useState('loading');

	useEffect(() => {
		(async function () {
			const { data } = await Axios.get('/statistic');
			setData(data);
			// setData([
			// 	...data,
			// 	...countries
			// 		.filter(ct => !data.find(dt => dt._id === ct.code))
			// 		.map(el => ({ _id: el.code, co2: 0 }))
			// ]);
		})();
	}, []);

	return (
		<div className='page-container mx-auto p-5 shadow' style={{maxWidth: '120rem', width: "100%"}}>
			<div style={{width: '100%'}}>
				{data === 'loading' ? (
					<div className='total-center'>
						<div class='spinner-border' role='status'>
							<span class='visually-hidden'>Loading...</span>
						</div>
					</div>
				) : (
					<Chart data={data} style={{width: '100%'}}/>
				)}
			</div>
		</div>
	);
}