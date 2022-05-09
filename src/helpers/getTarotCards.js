import TarotCards from '../data/tarotCards';

const getTarotCards = () => {
	const cards = [];

	for (let i = 0; i < 3; i++) {
		cards.push(TarotCards.at(Math.random() * TarotCards.length));
	}

	return cards;
};

export default getTarotCards;
