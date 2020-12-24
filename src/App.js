import logo from './logo.svg';
import HeaderBlock from './components/HeaderBlock';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import CardList from './components/CardList';
import Section from './components/Section';
import { wordsList } from './wordlist';

const App = () => {
  return (
    <>
      <HeaderBlock 
        logo
      >
          <Header size='xl'>Learn words online</Header>
         <Paragraph>Use cards to memorize new words</Paragraph>
         
      </HeaderBlock>
      <Section background='#decfab'>
        <Header size='m' small>Click on cards to see the translation!</Header>
        <CardList item={wordsList}/>
      </Section>
      <Section >
        <CardList item={wordsList}/>
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


export default App;
