import React from 'react';
import PropTypes from 'prop-types';
import { useFortune } from '../../hooks/useFetch';
import SignInformation from './components/Sign/SignInformation';
import TarotInformation from './components/Tarot/TarotInformation';

const AstrologyResults = ({ dateOfBirth, gender }) => {
	const { fortune, sign, cards, loading } = useFortune(dateOfBirth, gender);

	return (
		<>
			{!loading && (
				<>
					<div className="row">
						<SignInformation fortune={fortune} sign={sign} />
					</div>
					<TarotInformation cards={cards} />
				</>
			)}
		</>
	);
};

AstrologyResults.propTypes = {
	dateOfBirth: PropTypes.string.isRequired,
	gender: PropTypes.string.isRequired,
};

export default AstrologyResults;
