import './App.css';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';

function App() {

  const APP_ID = "794b6367";
  const API_KEY = "8a0e0f3d57113c03cfbd06f8fa4ed9fe";

  return (
    <>
      <Navbar />
      <Recipe APP_ID={APP_ID} API_KEY={API_KEY} />
    </>
  );
}

export default App;
