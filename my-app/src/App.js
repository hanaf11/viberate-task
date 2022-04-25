import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './html-css-sample/styles/styles.css'
import PageContainer from './Pages/PageContainer/Container';

function App() {
  return (
    <Router>

    <Routes>
      <Route exact path="/" element={<PageContainer/>} /> 
      <Route exact path="/:artist_uuid" element={<PageContainer/>}/>
    </Routes>

</Router>
  );
}

export default App;
