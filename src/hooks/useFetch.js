import { useState, useEffect } from 'react';
import { getFortune } from '../helpers/getFortune';
import getSign from '../helpers/getSign';

export const useFortune = (dateOfBirth, gender) => {
	const [state, setState] = useState({ data: [], loading: true });

	let sign = getSign(dateOfBirth);

	useEffect(() => {
		getFortune(sign.name.toLowerCase(), gender).then((fortune) =>
			setState({ data: fortune, sign: sign, loading: false })
		);
	}, [sign, gender]);

	return state;
};
