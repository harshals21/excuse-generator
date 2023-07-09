import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1 className='heading'> Generate An Excuse </h1>
      <button className='btn' onClick={() => fetchExcuse("party")}> Party </button>
      <button className='btn' onClick={() => fetchExcuse("family")}> Family </button>
      <button className='btn' onClick={() => fetchExcuse("office")}> Office </button>

      <p className='para'> {generatedExcuse} </p>
    </div>
  );
}

export default App;
