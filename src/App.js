import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import ScrollToTop from './components/ScrollToTop';
import LogoutModal from './components/LogoutModal';

function App() {
  return (
    // es falsa despues hay que quitar la div "seba"
    <div className="seba">
      <Wrapper />
      <ScrollToTop/>
      <LogoutModal/>
    </div>
  );
}

export default App;
