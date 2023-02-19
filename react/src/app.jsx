import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'


/// BULMA NAVBAR
// import './app.scss';
// import { Navbar } from "./components/Navbar.jsx"
// const nnn = createRoot(document.getElementById('nnn')).render(<Navbar />);


/// KATHERINE
// import Katherine from './components/Katherine';
// const katDomContainer = document.getElementById('kat')
// const root = createRoot(katDomContainer);
// root.render(<Katherine />);

/// AKLILU
// import Aklilu from './components/Aklilu';
// const dood = createRoot(document.getElementById('Aklilu')).render(<Aklilu />);

import RotatingLogo from "./components/RotatingLogo.jsx"

if (document.getElementById("lolo")) {
	const lolo = createRoot(document.getElementById('lolo'))
		.render(
			<RotatingLogo
				style={{
					height: 50,
					width: 50,
					display: "inline-block"
				}}
				logoUrl="https://s3-us-west-2.amazonaws.com/tcs-ghost/logo.svg"
			/>
		);
}
if (document.getElementById("logo")) {
	const logo = createRoot(document.getElementById('logo'))
		.render(
			<RotatingLogo
				style={{
					height: 15,
					width: 15,
					display: "inline-block"
				}}
				logoUrl="https://s3-us-west-2.amazonaws.com/tcs-ghost/logo.svg"
			/>
		);
}

import Calendar from "./components/calendar.js"

if (document.getElementById("startdate")) {
	const startdate = createRoot(document.getElementById('startdate'))
		.render(
			<Calendar
				month="Sep"
				date="11"
				day="Monday"
			/>
		);
}
if (document.getElementById("enddate")) {
	const enddate = createRoot(document.getElementById('enddate'))
		.render(
			<Calendar
				month="Nov"
				date="3"
				day="Friday"
			/>
		);
}

// import Swoosh from "./components/swoosh.js"
// const swoosh = createRoot(document.getElementById('swooshid'))
// 	.render(
// 		<Swoosh />
// 	);

import Ishtyle from "./components/ishtyle.js"

if (document.getElementById("swooshid")) {

	const swoosh = createRoot(document.getElementById('swooshid'))
		.render(
			<Ishtyle />
		);
}

import Handwritten from "./components/handwritten.js"

if (document.getElementById("handwritten")) {
	const handwritten = createRoot(document.getElementById('handwritten'))
		.render(
			<Handwritten />
		);
}
