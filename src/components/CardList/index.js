import React, { Component } from 'react';
import s from './CardList.module.css';
import Card from '../Card';

class CardList extends Component {

	render() {
		const {item = [], onDeletedItem} = this.props;

		return (
		<>
			
			<div className={s.root}>
				{

	          item.map(({eng, rus, id}) => 
	            <Card onDeleted={() => {
	            	console.log('###: 2 level');
	            	onDeletedItem(id);
	        	}} key={id} eng={eng} rus={rus}/>)
	  
				}
			</div>
		</>
	);
	}
}


export default CardList;