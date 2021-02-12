import React, { Component } from 'react';
import cl from 'classnames';
import s from './Card.module.scss';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

class Card extends React.Component {

    state = {
        chosen: false,
        isRemembered: false, 
    }

    handleCardClick = () => {  
        if (this.state.isRemembered === false ) {
            this.setState(({ chosen }) => {
                return {
                    chosen: !chosen,
                }
            })
        }                    
            
        };
    
    handleIsRememberedClick = () => {
        this.setState(({isRemembered}) => {
            return {
                isRemembered: !isRemembered,
            }
        });      
    };

    handleDeletedClick = () => {
        console.log('###: 1 level');
        this.props.onDeleted();
    };

    render() {
        const {eng, rus} = this.props;
        const {chosen, isRemembered} = this.state;
        const cardClass = [s.card];
        if (chosen) {
            cardClass.push(s.chosen);
        }

        return(

            <div 
                className={ cl(s.card, { [s.chosen]: chosen},
                    { [s.isRemembered]: isRemembered},
                    { [s.chosen]: isRemembered}) }                
                >
                <div className={s.icons}>
                    <CheckSquareOutlined onClick={this.handleIsRememberedClick}/>    
                </div>
                
                <div className={s.cardInner} onClick={this.handleCardClick}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>

                <div className={s.icons}>
                    <DeleteOutlined onClick={this.handleDeletedClick} />
                </div>
                
            </div>
        )
    }
}

export default Card;