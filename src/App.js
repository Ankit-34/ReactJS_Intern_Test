import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './style/app.css';

import Homepage from './components/Homepage';
import Booknow from './components/Booknow';
const App = () => {
  return (
    <Router> 
    <p className='title'> Book Yours Now</p>
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/booknow' element={<Booknow/>}></Route>
      </Routes> 
    </Router>
  )
}

export default App;