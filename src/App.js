import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import Context from './Context';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount(preCount => preCount + 1);
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <Context onIncreae={handleIncrease} />
      <h4>{count}</h4>
    </div>

  );
}

export default App;
