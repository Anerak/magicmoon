import React from 'react';
import PropTypes from 'prop-types';
import { useFortune } from '../../hooks/useFetch';

const AstrologyResults = ({ dateOfBirth, gender }) => {
	const { data, sign, loading } = useFortune(dateOfBirth, gender);

	return (
		<>
			<div className="row">{!loading && data}</div>
		</>
	);
};

AstrologyResults.propTypes = {
	dateOfBirth: PropTypes.string.isRequired,
	gender: PropTypes.string.isRequired,
};

export default AstrologyResults;
