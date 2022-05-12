import React from 'react';
import htmlEntity from '../../../../helpers/htmlEntity';

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

	return (
		<>
			<div className="row">
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
								<h3>{htmlEntity(8505)} Information</h3>
								<p>Color: {color} </p>
								<p>Compatible with {compatible}</p>
							</div>
							<div className="column">
								<h3>{htmlEntity(127808)} Luck</h3>
								<p>Lucky number: {number}</p>
								<p>Lucky time: {time}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignInformation;
