import React from 'react';
import s from './HeaderBlock.module.css';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';

const HeaderBlock = ({ hideBackground = false, logo = false, children, button = false }) => {
	const styleCover = hideBackground ? {backgroundImage: 'none'} : {};
	const showButton = button ? {display: 'inline-block'} : {display: 'none'};
	return (
		<div className={s.cover} style={styleCover}> 
			<div className={s.wrap}>
				{logo && < ReactLogoSvg />}
				{children}
				<a className={s.button} style={showButton} href="">Get started</a>
			</div>
		</div>
	);
};

export default HeaderBlock;