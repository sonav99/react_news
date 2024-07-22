
import { useState } from 'react';

import Navbar from './component/Navbar';
import Textform from './component/Textform';
import  React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {

  const [mode,setmode]=useState('light')
  const togglemode =()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor="white";


    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#454564';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Newsstar" mode={mode} toggle={togglemode}/>
    <LoadingBar
        color='#f11946'
        
      />
  
      <Routes>
      
          <Route exact path="/general" element={<Textform  key="general" category="general" mode="mode"/>}> 
          </Route>
          <Route  exact path="/sports" element={<Textform  key="sports" category="sports" mode="mode"/> }>
          </Route>
          <Route exact path="/business" element={<Textform  key="business" category="business" mode="mode"/>}>
          </Route>
        <Route exact path="/entertainment" element={<Textform  key="entertainment" category="entertainment" mode="mode"/>}>
          </Route>
          <Route exact path="/health"element={<Textform  key="health" category="health" mode="mode"/>}>
          </Route>
          <Route exact path="/science" element={<Textform  key="science" category="science" mode="mode"/>}>
          </Route>
          <Route exact path="/technology" element={<Textform  key="technology" category="technology" mode="mode"/>}>
          </Route>
        </Routes>
    
    </Router>
   
    
    
    </>
  );
}

export default App;
