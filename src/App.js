import React, { Component } from 'react';
import logo from './logo.svg';
import s from './App.scss';
import HeaderBlock from './components/HeaderBlock';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import CardList from './components/CardList';
import Section from './components/Section';
import { wordsList } from './wordlist';

class App extends Component {
  state = {
    wordArr: wordsList,
    engValue: '',
    rusValue: '',
    label: '',
  };

  inputRef = React.createRef();

  handleStartClick = (e) => {
    e.preventDefault();
    this.inputRef.current.focus();
  }

  handleEngInputChange = (e) => {
      console.log('###: ', e.target.value);
      this.setState({
        engValue: e.target.value
      })
    };

  handleRusInputChange = (e) => {
      console.log('###: ', e.target.value);
      this.setState({
        rusValue: e.target.value
      })
    };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState(({wordArr, engValue, rusValue}) => {
      const newWordArr = [
        ...wordArr
      ];
      newWordArr.push({
          eng: engValue,
          rus: rusValue,
          id: wordArr.length + 1
        })
      console.log(newWordArr);
      return {
        wordArr: newWordArr
      }
    });

    
  };


  handleDeletedItem = (id) => {
    this.setState( ({wordArr}) => {
      const idx = wordArr.findIndex(item => item.id === id);
      console.log('### ind: ', idx);
      console.log('### state before: ', this.state.wordArr);
      const newWordArr = [
        ...wordArr.slice(0, idx),
        ...wordArr.slice(idx + 1)
      ]
      console.log('### state after: ', this.state.wordArr);
      return {
        wordArr: newWordArr
      }
    });

  };
  render() {
    const { wordArr } = this.state;
    return (
      <>
        <HeaderBlock 
          logo
        >
            <Header size='xl'>Learn words online</Header>
           <Paragraph>Use cards to memorize new words</Paragraph>
           <a onClick={this.handleStartClick} className='button' href="">Get started</a>
           
        </HeaderBlock>
        <Section background='#decfab'>
          <Header size='m' small>Click on cards to see the translation!</Header>
          <form className='form' onSubmit={this.handleSubmitForm}>
          <label htmlFor="Eng">English:</label>
          <input id="Eng" ref={this.inputRef} type="text" value={this.state.engValue} 
            onChange={this.handleEngInputChange} />
          <label htmlFor="Rus">Russian:</label>
          <input id="Rus" type="text" value={this.state.rusValue} 
            onChange={this.handleRusInputChange} />
          <button>
            Add new word
          </button>
        </form>
          <CardList onDeletedItem={this.handleDeletedItem} item={wordArr}/>
        </Section>
        <Section >
          <CardList onDeletedItem={this.handleDeletedItem} item={wordArr}/>
        </Section>
        <HeaderBlock 
          hideBackground
        >
            <Header>Learn words online</Header>
           <Paragraph>Use cards to memorize new words</Paragraph>

        </HeaderBlock>
        
      </>
    );
  };
};

export default App;



