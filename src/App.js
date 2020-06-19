import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    // <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <MainContent/>
      <Footer/>
    </div>
    // <!-- End of Content Wrapper -->    
  );
}

export default App;
