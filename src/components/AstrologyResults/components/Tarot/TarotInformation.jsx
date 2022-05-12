import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TarotInformation.css';
import TarotCard from './TarotCard';
import htmlEntity from '../../../../helpers/htmlEntity';

const TarotInformation = ({ cards }) => {
	const [display, setDisplay] = useState(false);

	const toggleDisplay = (evt) => {
		evt.preventDefault();
		setDisplay(!display);
	};

	const saveToPDF = (evt) => {
		evt.preventDefault();
		window.print();
	};

	return (
		<>
			<div className={'row ' + (!display ? 'submit' : '')}>
				{!display && (
					<button className="button taroteye" onClick={toggleDisplay}>
						&#x1f441;
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
			<div className="row submit">
				<button className="button save" onClick={saveToPDF}>
					{htmlEntity(128190)}
				</button>
			</div>
		</>
	);
};

TarotInformation.propTypes = {
	cards: PropTypes.array.isRequired,
};
export default TarotInformation;
