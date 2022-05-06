import Signs from '../data/signs';

const getSign = (dateOfBirth) => {
	const dob = new Date(dateOfBirth + ' 0:00:00');
	let day = dob.getDate();
	let month = dob.getMonth() + 1;

	console.log(dob, day, month);

	let sign = Signs.filter(
		(sign) =>
			(day >= sign.startDay && month === sign.startMonth) ||
			(day <= sign.endDay && month === sign.endMonth)
	).at(0);

	return sign;
};

export default getSign;
