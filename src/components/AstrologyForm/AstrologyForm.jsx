import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AstrologyForm.css';
import htmlEntity from '../../helpers/htmlEntity';

const AstrologyForm = ({ setUserData }) => {
	const [formState, setFormState] = useState({
		name: '',
		age: '',
		gender: '',
		dateOfBirth: '',
	});

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setUserData(formState);
	};

	const handleChange = ({ target }) => {
		setFormState((prevState) => ({
			...prevState,
			[target['name']]: target.value,
		}));
	};

	return (
		<div className="row AstrologyForm">
			<div className="column column-50 column-offset-25">
				<form onSubmit={handleSubmit}>
					<fieldset>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={handleChange}
							value={formState.name}
						/>
						<label htmlFor="age">Age:</label>
						<input
							type="number"
							name="age"
							id="age"
							min="0"
							onChange={handleChange}
							value={formState.age}
						/>
						<label htmlFor="gender">Gender: </label>
						<select
							name="gender"
							id="gender"
							onChange={handleChange}
							value={formState.gender}>
							<option disabled value="">
								Gender
							</option>
							<option value="M">Male</option>
							<option value="F">Female</option>
							<option value="B">Binary</option>
						</select>
						<label htmlFor="dateOfBirth">Date of Birth:</label>
						<input
							type="date"
							name="dateOfBirth"
							id="dateOfBirth"
							onChange={handleChange}
						/>
						<div className="row submit">
							<button
								className="button magicball"
								type="submit"
								disabled={
									!(
										formState.age !== '' &&
										formState.dateOfBirth !== '' &&
										formState.gender !== '' &&
										formState.name !== ''
									)
								}>
								{htmlEntity(128302)}
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

AstrologyForm.propTypes = {
	setUserData: PropTypes.func.isRequired,
};

export default AstrologyForm;
