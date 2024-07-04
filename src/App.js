import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react , { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message, type)=>
    {
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(()=>
      {
        setAlert(null);
      },1500);
    }
  const toggleMode = ()=>
    {
      if(mode === 'light')
        {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has enabled","success");
          document.title = 'TextUtils - Dark Mode';
          // setInterval(()=>
          // {
          //   document.title = 'TextUtils is amazing Mode';
          // },2000);
          // setInterval(()=>
          // {
          //   document.title = 'Install textUtils Now';
          // },1500);
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has enabled","success");
          document.title = 'TextUtils - Light Mode';
        }
    }
  return (
    <>
  {/* <Navbar title="TextUtils" aboutTextUtils="About TextUtils" mode={mode} /> 
  <Navbar/>*/}

  
 
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert = {showAlert}  heading=" Enter the text to analyse below"  mode={mode} />
  </div>
 {/* 
 <Router>
 <Routes>
          <Route exact path="/" element={<TextForm showAlert = {showAlert}  heading=" Enter the text to analyse below"  mode={mode} />} />
          <Route exact path="/About" element={<About />} />
  </Routes>
 
 </Router> */}


   </>

  );
}
export default App;