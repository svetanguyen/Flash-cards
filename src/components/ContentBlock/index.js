import React from 'react';
import s from './ContentBlock.module.css';

const ContentBlock = ({title, descr}) => {

	return(
		<div className={s.wrapper}>
			{title && <h2 className={s.heading}>{title}</h2>}
			{descr && <p className={s.descr}>{descr}</p>}
		</div>
	);
};

export default ContentBlock;