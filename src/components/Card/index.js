import React, { Component } from 'react';
import cl from 'classnames';
import s from './Card.module.css';

class Card extends React.Component {

    state = {
        chosen: false,
    }

    handleCardClick = () => {
            if (this.state.chosen === false) {
                this.setState({
                    chosen: true,
                })
            } else {
                this.setState({
                    chosen: false, 
                })
            }
            
        };

    render() {
        const {eng, rus} = this.props;
        const {chosen} = this.state;
        const cardClass = [s.card];
        if (chosen) {
            cardClass.push(s.chosen);
        }

        return(

            <div 
                className={ cl(s.card, { [s.chosen]: chosen}) }
                onClick={this.handleCardClick}
                >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Card;