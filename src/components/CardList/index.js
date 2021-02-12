import React, { Component } from 'react';
import s from './CardList.module.css';
import Card from '../Card';

class CardList extends Component {
	state = {
		value: '',
		label: '',
	};

	inputRef = React.createRef();

	handleInputChange = (e) => {
			console.log('###: ', e.target.value);
			this.setState({
				value: e.target.value
			})
		};
	handleSubmitForm = (e) => {
		e.preventDefault();
		 this.setState(({value}) => {
		 	return {
		 		label: value,
		 		value: '', 
		 	}
		 });
	};
	render() {
		const {item = [], onDeletedItem} = this.props;

		return (
		<>
			<div>
				{this.state.label}
			</div>
			<form className={s.form} onSubmit={this.handleSubmitForm}>
				<input ref={this.inputRef} type="text" value={this.state.value} 
					onChange={this.handleInputChange} />
				<button>
					Add new word
				</button>
			</form>
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