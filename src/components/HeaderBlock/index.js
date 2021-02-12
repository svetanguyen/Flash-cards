import React from 'react';
import s from './HeaderBlock.module.css';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';

const HeaderBlock = ({ hideBackground = false, logo = false, children}) => {
	const styleCover = hideBackground ? {backgroundImage: 'none'} : {};
	return (
		<div className={s.cover} style={styleCover}> 
			<div className={s.wrap}>
				{logo && < ReactLogoSvg />}
				{children}
			</div>
		</div>
	);
};

export default HeaderBlock;