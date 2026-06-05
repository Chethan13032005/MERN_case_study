import { useState } from 'react';
import './App.css';
import debounce from 'lodash/debounce';                    
import moment from 'moment';           

function App() {
  const [count, setCount] = useState(0);
  const handleLog = debounce(() => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("Button clicked at:", time);
  }, 300);

  return (
    <div className="card">
      <h1>Bundle Analysis Test</h1>
      <button onClick={() => {
        setCount(c => c + 1);
        handleLog();
      }}>
        Count is {count}
      </button>
      <p>Using: Lodash, Chart.js, and Moment.js</p>
    </div>
  );
}

export default App;
