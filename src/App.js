import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const currentDate = new Date().toLocaleString()

  return (
    <div className="app">
      <div className="mainHeading">
        <h1 className='TodoHead'>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDate} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {todos.map((obj) => {

          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked);
                  console.log(obj);
                  setTodos(todos.filter(valObj => {
                    if (valObj.id === obj.id) {
                      valObj.status = e.target.checked
                    }
                    return valObj
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>setTodos(todos.filter((value)=> value.id !==obj.id))} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
          <h3 className='header1'><u>Finished Work</u></h3>
        {todos.map((obj) => {
          setTimeout(() => {
            
          }, );
          if(obj.status){
            return (<h5 className='subHeader'>{obj.text}</h5>)
          }
        
          // return null;
        }
        )}
      </div>
    </div>
  );
}

export default App;







