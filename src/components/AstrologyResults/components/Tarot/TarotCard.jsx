import React, { useEffect, useState } from 'react';
import './TarotCard.css';

const TarotCard = ({ card }) => {
	const [flipped, setFlipped] = useState(false);

	let {
		img: imageSrc,
		fortune_telling: fortunes,
		name,
		meanings: { light, shadow },
	} = card;

	useEffect(() => {
		let f = !!~~(Math.random() * 2);
		setFlipped(f);
	}, [card]);

	return (
		<>
			<div className="column TarotCard">
				<div className="holder">
					<img
						className={flipped ? 'flipped' : null}
						src={`./assets/tarot/cards/${imageSrc}`}
						alt={name}
					/>
				</div>
				<hr />
				<h3>{name}</h3>
				<p>
					{!flipped
						? light.at(Math.random() * light.length)
						: shadow.at(Math.random() * shadow.length)}
				</p>
				<p>{fortunes.at(Math.random() * fortunes.length)}</p>
			</div>
		</>
	);
};

export default TarotCard;
