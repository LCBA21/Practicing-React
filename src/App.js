import './App.css';
import { useState } from 'react';

function App() {

  const [todoList,setTodoList]= useState([])
  const [newTask,setNewTask]=useState("")

const handleChange=(e)=>{
setNewTask(e.target.value)
};

const addTask=()=>{
const newTodoList=[...todoList,newTask];
setTodoList(newTodoList);
};


  return (
    <div className="App">
       <div className='addTask'>
       <input
       onChange={handleChange}
       />
       </div>

       <div>
        <button onClick={addTask}>Add Task</button>
       </div>

       <div className='list'>
        {todoList.map((task)=>{
          return <h3>{task}</h3>
        })}
       </div>

    </div>
  );
}

export default App;


/* Using state to store values in Arrays and displaying items items stored
 

  const [todoList,setTodoList]= useState([])
  const [newTask,setNewTask]=useState("")

const handleChange=(e)=>{
setNewTask(e.target.value)

};

const addTask=()=>{
const newTodoList=[...todoList,newTask];
setTodoList(newTodoList);
}


       <div className='addTask'>
       <input
       onChange={handleChange}
       />
       </div>

       <div>
        <button onClick={addTask}>Add Task</button>
       </div>

       <div className='list'>
        {todoList.map((task)=>{
          return <h3>{task}</h3>
        })}
       </div>

*/

/* Using State and Ternary Operators to show and hide items

  const [showText,setShowText] =useState(true)

 const handleShow=()=>{

  setShowText(!showText)

 } 

    <div className="App">
       
      
       <button onClick={handleShow}>
        
        Show/Hide</button>

       {showText && <h1>Try to Show/Hide Me!!</h1>}

    </div>
*/



/* Using state as a counter

  const [count,setCount]=useState(0);

 const handleAdd=()=>{
  setCount(count+1)
 }

 const handleSubtract=()=>{
  setCount(count-1)
 }

 const handleZero=()=>{
  setCount(0)
 }

  return (
    <div className="App">

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleZero}>Set to Zero</button>
      <div>{count}</div>

    </div>
  );
*/


/* Using State to change value of input dynamically
function App() {

  const [inputValue,setInputValue] =useState("");

  const handleInput =(e) =>{
    setInputValue(e.target.value);
  }


  return (
    <div className="App">
       <input 
       type='text'
       onChange={handleInput}
        />

        <div>
        <h1>{inputValue}</h1>       
       </div>

    </div>
  );
}

*/