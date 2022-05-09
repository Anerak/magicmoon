import React, { useState } from 'react';
//import './App.css';
import Title from './components/Title/Title';
import AstrologyForm from './components/AstrologyForm/AstrologyForm';
import AstrologyResults from './components/AstrologyResults/AstrologyResults';

const App = () => {
	const [{ dateOfBirth, gender }, setUserData] = useState('');

	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="column column-offset-33">
						<Title />
					</div>
				</div>
				<AstrologyForm setUserData={setUserData} />
				{!!dateOfBirth && !!gender && (
					<AstrologyResults
						dateOfBirth={dateOfBirth}
						gender={gender}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
