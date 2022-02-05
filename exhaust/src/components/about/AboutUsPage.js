import React, { useEffect, useState } from 'react';
import Axios from '../../utils/Axios';
import { countries } from '../../utils/Data';
import "./styles.css";

export default function AboutUsPage() {

	return (
		<div className='page mx-auto p-5 shadow'>
			<div style={{width: '100%'}}>
	
				<div class="imgcontainer" >
					<img src={require("./plant2.png")} style={{width: "15%"}}  alt="Plant" class="plant"/>
				</div>

				<div class="grid-container">
					<div>
						<div class="imgcontainer">
							<img src={require("./car.png")} alt="Plant" class="plant"/>
						</div>
						<div class="imgcontainer">
							<img src={require("./cows.png")} alt="Plant" class="plant"/>
						</div>

					</div>

					<div>
						<h2>About US</h2>
						<p className="info">At Exhaust we care about our environment and stability of the world. Climate changing has effected us in all sorts of ways in last few decades and it is extremly hard for us to imagine and visualise how much carbon we are really producing in our daily lives.</p>
						<p className='info'>We allow you to keep track and visualise of all your good a bad habits, and how much we produce or reduce carbon everyday. We allow you to get in the habit of recognising how much you are effecting yor environment. Did you really know how much eating beef can change our lives. Agriculture alone makes up for an estimated 14% of green house gasses produced. Equivalent to the amount that we produce transporting our selves and goods in cars, planes and event boats.</p>
						<p className="info">Our solution is to educate people about what kind of food they will eat, clothing they will buy, transportation methods they use and much more. Allowing them to become much more aware of what they do, while being able to keep track of it all and see their improvement. Along side public data regarding all the countries around the world</p>
					</div>

					<div>
						<div class="imgcontainer">
							<img src={require("./plant3.png")} alt="Plant" class="plant"/>
						</div>
						<div class="imgcontainer">
							<img src={require("./carbon.png")} alt="Plant" class="plant"/>
						</div>
					</div>  
				</div>

				<div class="imgcontainer" >
					<img src={require("./arrow.png")} style={{width: "15%"}}  alt="Plant" class="plant"/>
				</div>

			</div>
		</div>
	);
}