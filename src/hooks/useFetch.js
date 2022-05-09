import { useState, useEffect } from 'react';
import { getFortune } from '../helpers/getFortune';
import getSign from '../helpers/getSign';
import getTarotCards from '../helpers/getTarotCards';

export const useFortune = (dateOfBirth, gender) => {
	const [state, setState] = useState({
		fortune: {},
		sign: {},
		cards: [],
		loading: true,
	});

	useEffect(() => {
		let sign = getSign(dateOfBirth);
		let cards = getTarotCards();
		getFortune(sign.name.toLowerCase(), gender)
			.then((fortune) => {
				setState({
					fortune: fortune,
					sign: sign,
					cards: cards,
					loading: false,
				});
			})
			.catch((err) => {
				throw new Error('Cannot fetch fortune');
			});
	}, [dateOfBirth, gender]);

	return state;
};
