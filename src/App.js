import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode has benn enabled", "success");
      document.title = "Magic Text + Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has benn enabled", "success");
      document.title = "Magic Text + Light Mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Navbar Aboutmy="hello vipul about you"/> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route> */}
            <Textform showAlert={showAlert} heading="Enter Details to Analyize" />
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
