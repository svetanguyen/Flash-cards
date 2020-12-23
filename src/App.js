import logo from './logo.svg';
import HeaderBlock from './components/HeaderBlock';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';

const App = () => {
  return (
    <>
      <HeaderBlock 
        title="Learn words online" 
        descr="Use cards to memorize new words"
        logo
      />
      <ContentBlock 
        title="Start here"
        descr="This is the recommendations on learning"
      />
      <FooterBlock 
        content="Copyright"
      />
    </>
  );
};


export default App;
