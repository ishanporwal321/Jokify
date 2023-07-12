import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import {Main} from "./pages/main/main"; 
import {Login} from "./pages/login";
import {Navbar} from "./components/navbar";
import {CreateJoke} from "./pages/create-joke/create-joke";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createjoke' element={<CreateJoke/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
