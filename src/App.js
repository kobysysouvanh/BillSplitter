import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [total, setTotal] = useState();

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1){
      setCount(count - 1);    
    }
  };

  const grabBill = event => {
    setBill(event.target.value);
    
  };

  const grabTip = event => {
    setTip(event.target.value/100);
  };

  useEffect(() => {
    if (bill && tip != null){
      setTotal((parseInt(bill) + parseInt((tip*parseInt(bill))))/ parseInt(count));
    }
    else {
      setTotal(0);
    }
  }, [bill, tip, count])

  return (
    <div className="app">
      <h1 id="title">Bill Splitter</h1>
      <div className="label" id="total">Total</div>
      <div className="inputContainer">
        <span className="inputAmount">$<input className="totalInput" type="text" placeholder="0.00" onKeyUp={grabBill}/></span>     
      </div>
      <div className="label" id="tip">Tip</div>
      <div className="inputContainer">
        <span className="inputAmount">%<input className="tipInput" type="text" placeholder="0" onKeyUp={grabTip}/></span>
      </div>
      <span className="label" id="people">People</span>
      <div className="buttonContainer">
        <button className="button" onClick={decreaseCount}>-</button>
        <span className="numberOfPeople" >{count}</span>
        <button className="button" onClick={increaseCount}>+</button>
      </div>
      <div className="totalContainer">
        <label className="label" id="totalPerPerson">Cost Per Person</label>
        <label className="label">${total}</label>
      </div>
    </div>
  );
}
export default App;
