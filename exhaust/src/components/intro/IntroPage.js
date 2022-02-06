import React, { useEffect, useState } from 'react';
import "./intro.css";
import {useHistory, Link, Router} from "react-router-dom";
import LoginPage from "../register/LoginPage"

export default function AboutUsPage(Props) {
	const history = useHistory();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const gotoLogin = () => {
		if(isLoggedIn == false) {
			setIsLoggedIn(true);
		}
		else{
			setIsLoggedIn(false);
		}
		console.log(isLoggedIn)
	}


	return(
		
		isLoggedIn == false ? (
			<div className='page mx-auto p-5 shadow'>
				<div style={{width: '100%'}}>
		
					<div class="logoContainer" >
						<img src={require("./logo.png")} style={{width: "20%"}}  alt="intro" class="intro"/>
					</div>

					<div className="slogan">
							<p className="title">Shapping The Reality Around Us</p>
						</div>

					<div>
						<p className="text">Start off by creating an account and navigating to the Home Page where you can track your activities and see all your stats and history.</p>
						<p className='text'>We allow you to keep track and visualise of all your good a bad habits, and how much we produce or reduce carbon everyday. We allow you to get in the habit of recognising how much you are effecting yor environment. Did you really know how much eating beef can change our lives. Agriculture alone makes up for an estimated 14% of green house gasses produced. Equivalent to the amount that we produce transporting our selves and goods in cars, planes and event boats.</p>
						<p className="text">Head to the Maps page to track your trasnportation and calculate your emissions or go to the Stats page wher you can see live global data</p>
					</div>

					<button className="contactUs" onClick={gotoLogin}>Get Started</button>
					
				</div>
			</div>
		) : (
			<LoginPage />
		)
		
	);
}