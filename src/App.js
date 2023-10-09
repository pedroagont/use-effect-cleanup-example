import { useEffect, useState } from 'react';
import './App.css';

function ListItem(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prev) => prev + 1);
      console.log(props.item);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, []);

  return (
    <li>
      {props.item}: {counter}
      <button onClick={() => props.handleRemove(props.item)}>
        remove timer
      </button>
    </li>
  );
}

function App() {
  const [items, setItems] = useState(['wow', 'awesome']);

  const handleRemove = (item) => {
    const newItems = items.filter((it) => it !== item);
    setItems(newItems);
  };

  return (
    <>
      <h1>Aloo</h1>
      <ul>
        {items.map((item) => (
          <ListItem key={item} item={item} handleRemove={handleRemove} />
        ))}
      </ul>
    </>
  );
}

export default App;
