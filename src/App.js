import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoList from './TodoList';
import createTodos from './Utills';

const todos=createTodos();
function App() {
  const [tab,setTab]=useState('all');
  const [isDark,setIsDark]=useState(false);
  return (
    <>
    <button onClick={() => { setTab('all'); }}>All</button>
    <button onClick={() => { setTab('active'); }}>Active</button>
    <button onClick={() => { setTab('completed'); }}>completed</button>
    <br/>
    <label>
      <input type="checkbox" checked={isDark} onChange={(e)=>setIsDark(e.target.checked)}>Dark Mode</input>
    </label>
    <hr/>
    <TodoList todos={todos} tab={tab} theme={isDark ? 'dark':'light'}/>
    </>
    
  );
}

export default App;
