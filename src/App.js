import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
     <Header/>

     <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/cart/:id' element={<CardsDetails/>} />
     </Routes>
    </div>
  );
}

export default App;
