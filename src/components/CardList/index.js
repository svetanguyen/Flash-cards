import React from 'react';
import s from './CardList.module.css';
import Card from '../Card';

const CardList = ({item = []}) => {
	return(
		<div className={s.root}>
			{

          item.map(({eng, rus}, index) => 
            <Card key={index} eng={eng} rus={rus}/>)
  
			}
		</div>
	)
}

export default CardList;