import {useState} from 'react'

import './App.css';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className='main'
    >
      <div className="con">
      <p className='count'>count : {value}</p>
      <button type="button" onClick={() => setValue(value +1)} className='btn'>increment </button><br/>
      <button type="button" onClick={() => setValue(value -1)} className='btn'>decrement </button><br/>
      <button type="button" onClick={() => setValue(0)} className='btn'>reset </button>
    </div>
    </div>
  );
}

export default App;
