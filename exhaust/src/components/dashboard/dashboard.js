import React, { useEffect, useState } from 'react';
import Axios from '../../utils/Axios';
import Chart from '../charts/Chart';
import { countries } from '../../utils/Data';
import "../charts/styles.css";

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
		<div className='page mx-auto p-5 shadow'>
			<div style={{width: '100%'}}>
				{data === 'loading' ? (
					<div className='total-center'>
						<div class='spinner-border' role='status'>
							<span class='visually-hidden'>Loading...</span>
						</div>
					</div>
				) : (
					<>
					<Chart data={data} style={{width: '100%'}}/>
					<p className="info">Here you can see all data regarding other countries using the application. It allows you to see, compare and record each others progress. Countires that have blue bars towards the right are doing well, reducing carbon more than they are creating. On the other hand countires with their bars pointing to the left which are red are not doing as good and are creating more carbon than they are reducing.</p>
					<p className='info'>You can save all this information whenever you want by clicking the drop down menu at the top right corner. This will allow you to save a copy of the graph and its data in the format that you wish.</p>
					</>
				)}
			</div>
		</div>
	);
}