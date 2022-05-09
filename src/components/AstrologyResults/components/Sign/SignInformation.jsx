import React from 'react';

const SignInformation = ({ fortune, sign }) => {
	let {
		color,
		compatibility: compatible,
		description,
		date_range: dateRange,
		lucky_number: number,
		lucky_time: time,
	} = fortune;

	let { name, symbol } = sign;

	const htmlEntity = (x) => String.fromCharCode(x);

	return (
		<>
			<div className="column">
				<h2>
					{htmlEntity(symbol)} {name} ({dateRange})
				</h2>
				<div className="column">
					<div className="row">
						<div className="column"></div>
					</div>
					<div className="row">
						<p>{description}</p>
					</div>
					<div className="row">
						<div className="column">
							<h3>ℹ️ Information</h3>
							<p>Color: {color} </p>
							<p>Compatible with {compatible}</p>
						</div>
						<div className="column">
							<h3>🍀 Luck</h3>
							<p>Lucky number: {number}</p>
							<p>Lucky time: {time}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignInformation;
