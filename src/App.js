import React from 'react';
import './App.css';
import Header from '././blocks/header/Header.js';
import Main from './blocks/main/Main';
import Models from './blocks/models/Models';
import Review from './blocks/review/Review';
import AllModels from './blocks/allModels/AllModels';
import About from './blocks/about/About';
import Advantages from './blocks/advantages/Advantages';
import Calculator from './blocks/calculator/Calculator';
import Services from './blocks/services/Services';
import News from './blocks/news/News';
import Footer from './blocks/footer/Footer';

function App() {
  return (
    <div className="App">
<Header/>
{/* <Main/> */}
{/* <Models/> */}
{/* <Review/> */}
{/* <AllModels/> */}
{/* <About/> */}
{/* <Advantages/> */}
{/* <Calculator/> */}
{/* <Services/> */}
<News/>
<Footer/>
    </div>
  );
}

export default App;
