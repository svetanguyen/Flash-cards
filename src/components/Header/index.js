import React from 'react';
import s from './Header.module.css';
import cl from 'classnames';

const Header = ({black = false, size = 'xl', small = false, children}) => {
	let sizePoint;
	switch (size) {
		case 'xl':
			sizePoint = 1;
			break;
		case 'l': 
			sizePoint = 2;
			break;
		case 'm': 
			sizePoint = 3;
			break;
		case 's':
			sizePoint = 4;
			break;
		case 'xs': 
			sizePoint = 5;
			break;
		default:
			sizePoint = 1;
	};

	return React.createElement(
		`h${sizePoint}`,
		{
			className: cl(s.header, {
			[s.black]: black,
			[s.small]: small,
	})
		},
		children,
	)

		
};

export default Header;
