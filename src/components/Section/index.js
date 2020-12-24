import React from 'react';
import s from './Section.module.css';

const Section = ({title, descr, background , children}) => {
	const styleBg = background ? {backgroundColor: background} : {};
	return(
		<div className={s.wrapper} style={styleBg}>
			{children}
		</div>
	);
};

export default Section;