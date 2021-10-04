import { useState, useEffect } from 'react';
import realtime from './firebase';
import {ref, onValue, push } from 'firebase/database';
import './App.css';

function App() {

const [sleep, setSleep] = useState([]);
const [userInput, setUserInput] = useState([]);

useEffect( () => {

  const dbRef = ref(realtime);

  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();

    const newArray = [];

    for (let item in data) {

      const object = {
        key: item,
        title: data[item]
      }

      newArray.push(object);
    }

    setSleep(newArray);
  })
}, []);


const handleChange = (event) => {
  setUserInput(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();

  if (userInput) {
    const dbRef = ref(realtime);

    push(dbRef, userInput);

    setUserInput("");
  } else {
    alert("NOTHING!");
  }
}


  return (
    <div className="App">
      <h1>Banana cream pie, how do I love thee?</h1>

      <form onSubmit={ handleSubmit }>
        <label htmlFor='userBookChoice'>Add your love for banana cream pie:</label>
        <input
          type="text"
          id="userBookChoice" 
          onChange={handleChange} 
          value={ userInput } // in a regular form, this is sent to the server. We want to send the input we callected from the userInput state.  This is a SPEED MEASURE.  Similar to how react makes us use keyprops when we map to the page, to keep track.  It reads an empty text input as default aboove, and  so it starts with nothing.  Each state function does two things when called: updates state and calls a rerender.  Using value, we are bounding the value on the page as part of React, not the browser, since it checks the value here and ues it as teh reference.  Without value, it uses the browser cache to keep the values on the page.  Using value is BINDING the input.
        />
        <button>Add it!</button>
      </form>

      <ul>
        {
          sleep.map( (item) => {
            return (
              <li key={item.key} >
                <p>{item.title}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
