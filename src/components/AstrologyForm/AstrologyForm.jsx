import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AstrologyForm.css';

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
		<form className="main-form" onSubmit={handleSubmit}>
			<div className="row">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					onChange={handleChange}
					value={formState.name}
				/>
			</div>

			<div className="row">
				<label htmlFor="age">Age:</label>
				<input
					type="number"
					name="age"
					id="age"
					min="0"
					onChange={handleChange}
					value={formState.age}
				/>
			</div>

			<div className="row">
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
			</div>
			<div className="row">
				<label htmlFor="dateOfBirth">Date of Birth:</label>
				<input
					type="date"
					name="dateOfBirth"
					id="dateOfBirth"
					onChange={handleChange}
				/>
			</div>
			<div className="row justify-centered">
				<button
					className="btn-submit"
					type="submit"
					disabled={
						!(
							formState.age !== '' &&
							formState.dateOfBirth !== '' &&
							formState.gender !== '' &&
							formState.name !== ''
						)
					}>
					🔮
				</button>
			</div>
		</form>
	);
};

AstrologyForm.propTypes = {
	setUserData: PropTypes.func.isRequired,
};

export default AstrologyForm;
