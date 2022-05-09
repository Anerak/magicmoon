export const getFortune = async (sign, gender) => {
	const url = new URL('https://aztro.sameerkumar.website/');
	url.searchParams.set('sign', sign);

	let day = null;

	switch (gender) {
		case 'M':
			day = 'yesterday';
			break;
		case 'F':
			day = 'today';
			break;

		case 'B':
			day = 'tomorrow';
			break;

		default:
			day = 'today';
			break;
	}

	url.searchParams.set('day', day);

	const req = await fetch(url, { method: 'POST', mode: 'cors' });
	const fortune = await req.json();

	return fortune;
};
