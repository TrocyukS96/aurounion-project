import React from 'react';
import './App.css';
import Header from '././blocks/header/Header.js';
import Main from './blocks/main/Main';
import Models from './blocks/models/Models';
import Review from './blocks/review/Review';

function App() {
  return (
    <div className="App">
<Header/>
{/* <Main/> */}
{/* <Models/> */}
<Review/>
    </div>
  );
}

export default App;
