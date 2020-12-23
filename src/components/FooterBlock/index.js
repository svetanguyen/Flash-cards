import React from 'react';
import s from './FooterBlock.module.css';

const FooterBlock = ({content}) => {
	return (
		<div className={s.wrapper}>
			{content && <p className={s.content}>{content}</p>}
		</div>
	)
	
};

export default FooterBlock;