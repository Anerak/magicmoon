import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TarotInformation.css';
import TarotCard from './TarotCard';

const TarotInformation = ({ cards }) => {
	const [display, setDisplay] = useState(false);

	const toggleDisplay = (evt) => {
		evt.preventDefault();
		setDisplay(!display);
	};

	return (
		<>
			<div className={'row ' + (!display ? 'submit' : '')}>
				{!display && (
					<button className="button taroteye" onClick={toggleDisplay}>
						👁‍🗨
					</button>
				)}
				{display &&
					cards.map((card) => (
						<TarotCard
							card={card}
							key={
								card.name +
								Math.random().toString(16).substring(9)
							}
						/>
					))}
			</div>
		</>
	);
};

TarotInformation.propTypes = {
	cards: PropTypes.array.isRequired,
};
export default TarotInformation;
