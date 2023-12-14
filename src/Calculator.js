import Button from './Button';
import { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
  
    const handleButtonClick = (value) => {
      if (value === '=') {
        try {
          const result = eval(input);
          setHistory((prevHistory) => [
            ...prevHistory,
            { time: new Date().toLocaleString(), operation: input, result: result },
          ]);
          setInput(result.toString());
        } catch (error) {
          setInput('Error');
        }
      } else if (value === 'C') {
        setInput('');
      } else {
        setInput((prevInput) => prevInput + value);
      }
    };
  
    return (
      <>
      <h1 className="text-center mt-4">Calculator</h1>
      <div className="w-100 d-flex flex-column flex-lg-row" style={{marginBottom: "30px"}}>
        <div className="calculator w-100 w-lg-50">
          <div className="display w-75 d-flex mx-auto py-3">
            <input
              type="text"
              className="form-control text-end"
              value={input}
              readOnly
            />
            <Button value="C" onClick={handleButtonClick} />
          </div>
          <div className="buttons d-flex flex-column align-items-center">
            <div className='d-flex w-75'>
              <Button value="1" onClick={handleButtonClick} />
              <Button value="2" onClick={handleButtonClick} />
              <Button value="3" onClick={handleButtonClick} />
              <Button value="+" onClick={handleButtonClick} />
            </div>
            <div className='d-flex w-75'>
              <Button value="4" onClick={handleButtonClick} />
              <Button value="5" onClick={handleButtonClick} />
              <Button value="6" onClick={handleButtonClick} />
              <Button value="-" onClick={handleButtonClick} />
            </div>
            <div className='d-flex w-75'>
              <Button value="7" onClick={handleButtonClick} />
              <Button value="8" onClick={handleButtonClick} />
              <Button value="9" onClick={handleButtonClick} />
              <Button value="*" onClick={handleButtonClick} />
            </div>
            <div className='d-flex w-75'>
              <Button value="0" onClick={handleButtonClick} />
              <Button value="." onClick={handleButtonClick} />
              <Button value="/" onClick={handleButtonClick} />
              <Button value="=" onClick={handleButtonClick} />
            </div>
          </div>
        </div>
        <div style={{maxHeight: "450px"}} className="history-section d-flex flex-column gap-2 px-2 border pb-2 overflow-y-scroll shadow w-75 mx-auto border-2 mt-4 d-flex">
          <h5 className='p-4 position-sticky top-0 bg-light'>History:</h5>
          {history.map((item, index) => (
            <div key={index} className="d-flex flex-column px-3 py-2 rounded" style={{backgroundColor: index % 2 === 0 ? "lightgrey" : "#ffffff"}}>
              <p>{item.time}</p>
              <p>{`${item.operation} = ${item.result}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    );
  };

export default Calculator;