import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const APP_ID = "794b6367";
  const API_KEY = "8a0e0f3d57113c03cfbd06f8fa4ed9fe";
  const [progress, setProgress] = useState(0)


  return (
    <>
      <Navbar />
      <LoadingBar
        color='#ff80ff'
        style={{
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(255, 100, 255, 0.5)"
        }}
        height={3}
        shadow={true}
        loaderSpeed={300}
        transitionTime={100}
        progress={progress}
      />

      <Recipe setProgress={setProgress} APP_ID={APP_ID} API_KEY={API_KEY} />
    </>
  );
}

export default App;
