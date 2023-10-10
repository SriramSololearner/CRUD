import {React, useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  
  return (
    
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Add" element={<Create />} />
          <Route path="/Update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
