import React, { useEffect, useState } from 'react';
import Axios from '../../utils/Axios';
import { itemScoreBoard } from '../../utils/Data';
import moment from 'moment';
import CountryHistoryChart from '../charts/CountriesChart';
import "./styles.css";

// The only reason this exists is because the actual histroy is very empty and the chart doesn't look like much of a chart
// TLDR this is here for visual reasons (the endpoint itself works perfectly)
const placeholderHistoryData = [];
const rawValues = [
	2,
	5.2,
	3.5,
	2.1,
	7.2,
	3.3,
	0.8,
	-0.2,
	-1.5,
	-2.2,
	-1.2,
	-1.6,
	-2.2,
	-3.5,
	-4.1,
	-3.9,
	-4.3,
	-3.9,
	-3.1,
	-2.6,
	-2.9,
	-2.1,
	-1.1,
	0.6,
	0.8,
	1.4,
	0.2,
	-1.3,
	0.4,
	1.2
];
const monthAgo = new Date() - 30 * 24 * 60 * 60 * 1000;
for (let i = 0; i <= 30; i++) {
	placeholderHistoryData.push({ date: monthAgo + i * 24 * 60 * 60 * 1000, co2: rawValues[i] });
}

export default function HomePage() {
	const [selectedActivity, setSelectedActivity] = useState();
	const [amount, setAmount] = useState('');
	const [history, setHistory] = useState('loading');

	console.log(placeholderHistoryData);

	async function submitEntry() {
		try {
			await Axios.post('/new-entry', { activityId: selectedActivity, amount });
			setHistory('loading');
			await updateEntries();
			setAmount('');
		} catch (err) {
			console.error(err);
			alert('Unexpected error');
		}
	}

	useEffect(() => {
		updateEntries();
	}, []);

	async function updateEntries() {
		const { data } = await Axios.get('/my-activites');
		setHistory(data);
	}

	return (
		<>
		<div className='page mx-auto p-5 shadow' style={{ width: "100%"}}>
			<div className='inner-container row mb-3 justify-content-around'>
				<div className='inner-container'>
					<h2 className='topTitle'>Add Entry</h2>
					<div className='input-group'>
						<select
							value={selectedActivity}
							onChange={e => setSelectedActivity(e.target.value)}
							className='form-select'
							id='inputGroupSelect02'>
							<option selected>Activity...</option>
							{itemScoreBoard.map((el, index) => (
								<option className="form-option" value={index}>{el.name}</option>
							))}
						</select>
						<input
							className='form-control'
							value={amount}
							onChange={e => setAmount(e.target.value)}
							min={1}
							placeholder='Amount'
							type='number'
							aria-label='amount'
						/>
						{selectedActivity !== undefined && itemScoreBoard[selectedActivity].unit ? (
							<label className='input-group-text' for='inputGroupSelect02'>
								{itemScoreBoard[selectedActivity].unit}
							</label>
						) : null}

						<button className="add" onClick={submitEntry}>
							Add
						</button>
					</div>
				</div>

				<div>

					<div className='label-group mt-3'>
						<label className='input-group-text col-5 d-flex' for='inputGroupSelect02'>
							<span className='d-block' >
								CO2 / Unit:
							</span>
							<strong className='d-block'>
								{itemScoreBoard[selectedActivity] &&
									itemScoreBoard[selectedActivity].co2PerUnit + 'kg'}
							</strong>
						</label>
						<label className='input-group-text col-5 d-flex' for='inputGroupSelect02'>
							<span  className='d-block'>
								Total:{' '}
							</span>
							<strong className='d-block'>
								{itemScoreBoard[selectedActivity] &&
									(amount * itemScoreBoard[selectedActivity].co2PerUnit).toFixed(
										2
									) + 'kg'}
							</strong>
						</label>
					</div>
				</div>

				<div>
					{/* Impact */}
					<hr className='hr' />
					<div className='col-5 mb-4'>
						<h2 className='yourimpact'>Your Impact</h2>
						<h5 className='subtitle  text-muted fw-normal'>Recorded CO2</h5>

						{history === 'loading' ? (
							<div class='spinner-border d-flex mx-auto mt-5' role='status'>
								<span class='visually-hidden'>Loading...</span>
							</div>
						) : (
							<>
							<Overview history={history} />
							<p className="intro">Here you can see your total carbon emmisions you have created, on the left you can see the total amount of carbon produced from your activities in red. On the right hand side you can see how much carbon you have reduced in blue, this could be done by planting trees and recycling. In the middile the total shows you difference between the carbon you have produced and reduced. If it is red that means you are producing to much carbon and if it was blue that means you have negative carbon emission meaning you are doing great.</p>
							</>
						)}
					</div>
					

					
				</div>
			</div>
		</div>



		{/* History */}
		<div className='page mx-auto p-5 shadow' style={{ width: "100%"}}>
			<div className='inner-container row mb-3 justify-content-around'>
				<div>
					<div className='col-5 mb-4'>
						<h5 className='history text-muted fw-normal my-4'>History</h5>
						<hr className='hr' />
						<p className="intro">All CO2 emmisions based of the last 30 days in your country</p>
						<CountryHistoryChart data={placeholderHistoryData} />
					</div>
				</div>
			</div>
		</div>


		{/* Recent Activity */}
		<div className='page mx-auto p-5 shadow' style={{ width: "100%"}}>
			<div className='inner-container row mb-3 justify-content-around'>
				<div>
					<h2 className='myactivity'>Recent Activity</h2>
					<hr className='hr' />
					<p className="intro">Here you can view all the details regarding the activity you submited such as what you were doing, how much CO2 you pruduced and what day it was. You can also edit and delete them whenever you want.</p>

					<table className="firstRow">
						<tr className='d-flex align-items-center'>
							<th>Activity:</th>
							<th>Amount:</th>
							<th>CO2:</th>
							<th>Date:</th>
						</tr>
					</table>

					{history === 'loading' ? (
						<div className='spinner-border d-block mx-auto mt-5' role='status'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					) : (
						
						history.map(el => (
							<table className='table'>
								<tr>
									<td>{el.name}</td>
									<td className='table1'>
										{el.amount} {el.unit}
									</td>
									<td>{el.co2}kg</td>
									<td>{moment(el.createdAt).format('DD. MMM')}</td>
								</tr>
							</table>
						))
					)}
				</div>
			</div>
		</div>
		</>
	);
}

function Overview({ history }) {
	const total = history.reduce((total, el) => (total += el.co2), 0).toFixed(2);

	return (
		<>
			<div className='produced overview-container'>
				<div className='text-center'>
					<p className='mb-0 text-muted'>Produced</p>
					<h5 className='red'>
						{history
							.reduce((total, el) => (total += Math.max(0, el.co2)), 0)
							.toFixed(2)}
						kg
					</h5>
				</div>
				<div className='total text-center'>
					<p className='mb-0 text-muted'>Total</p>
					<h2 className={total > 0 ? 'red' : 'blue'}>{total}kg</h2>
				</div>
				<div className='reduced text-center'>
					<p className='mb-0 text-muted'>Reduced</p>
					<h5 className='blue'>
						{history
							.reduce((total, el) => (total += Math.abs(Math.min(0, el.co2))), 0)
							.toFixed(2)}
						kg
					</h5>
				</div>
			</div>
		</>
	);
}