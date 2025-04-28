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

    // const removeBodyClasses=()=>
    //   {
    //     document.body.classList.remove('bg-light')
    //     document.body.classList.remove('bg-dark')
    //     document.body.classList.remove('bg-warning')
    //     document.body.classList.remove('bg-danger')
    //     document.body.classList.remove('bg-success')


    //   }
  const toggleMode = (cls)=>
    {
      // removeBodyClasses();
      // console.log(cls);
      // document.body.classList.add('bg-'+cls);
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

  
 
  
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
 <Routes>
 <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, character Counter,Remove extra Spaces" mode={mode} />} />
  <Route path="/About" element={<About mode={mode} />} />
          
  </Routes>
  </div>
 </Router>
 


   </>

  );
}
export default App;