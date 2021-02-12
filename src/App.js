import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderBlock from './components/HeaderBlock';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import CardList from './components/CardList';
import Section from './components/Section';
import { wordsList } from './wordlist';

class App extends Component {
  state = {
    wordArr: wordsList,
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
          logo button
        >
            <Header size='xl'>Learn words online</Header>
           <Paragraph>Use cards to memorize new words</Paragraph>
           
        </HeaderBlock>
        <Section background='#decfab'>
          <Header size='m' small>Click on cards to see the translation!</Header>
          
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



