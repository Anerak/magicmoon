import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title/Title';
import AstrologyForm from './components/AstrologyForm/AstrologyForm';
import AstrologyResults from './components/AstrologyResults/AstrologyResults';

const App = () => {
	const [{ dateOfBirth, gender }, setUserData] = useState('');

	return (
		<div className="App">
			<header className="App-header">
				<Title />
				<AstrologyForm setUserData={setUserData} />
				{!!dateOfBirth && !!gender && (
					<AstrologyResults
						dateOfBirth={dateOfBirth}
						gender={gender}
					/>
				)}
			</header>
		</div>
	);
};

export default App;
