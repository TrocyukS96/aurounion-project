import React from 'react';
import {BrowserRouter} from 'react-router-dom'; 
import {Route} from 'react-router-dom'; 
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
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
<Header/>
<Route path='/Main' component={Main}/>
<Route path='/Models' component={Models}/>
<Route path='/Review' component={Review}/>
<Route path='/About' component={About}/>
<Route path='/AllModels' component={AllModels}/>
<Route path='/Advantages' component={Advantages}/>
<Route path='/Calculator' component={Calculator}/>
<Route path='/Services' component={Services}/>
<Route path='/News' component={News}/>
<Redirect from='/' to='/News' path='/News' />
<Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
