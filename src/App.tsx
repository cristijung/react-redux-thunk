import React, {useState} from 'react';
// import { getComments } from './redux/actionCreators/getComment';
// import { useDispatch } from 'react-redux';
// import { useTypedSelector } from './hooks/useTypeSelector';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Principal } from './components/Principal';

function App() {
  
  return (
      <>
        <Header />
        <Principal />    
        <Footer />
      </>
  );
}

export default App;
