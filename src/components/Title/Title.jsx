import React from 'react';
import htmlEntity from '../../helpers/htmlEntity';

const Title = () => {
	return (
		<h1>
			{htmlEntity(127769)} Magic Moon {htmlEntity(128302)}
		</h1>
	);
};

export default Title;
