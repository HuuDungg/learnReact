import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoTitle from './components/todo-title/Todo-title'
import TodoNew  from './components/todo-new/todo-new'
import TodoList  from './components/todo-list/todo-list'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TodoTitle></TodoTitle>
  <TodoNew></TodoNew>
  <TodoList></TodoList>
  </React.StrictMode>,
)
