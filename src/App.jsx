import TodoTitle from './components/todo-title/Todo-title'
import TodoNew  from './components/todo-new/todo-new'
import TodoList  from './components/todo-list/todo-list'
import { useState } from 'react';
const HuuDung = "Tran Huu Dung";
const age = 22;


const App = () => {
        const [todoList, setTodoList] = useState([
                {id: 1, name: "learn english" },
                {id: 2, name: "learn java" },
                {id: 3, name: "learn python" }
        ])

        const addNewTodo = (name) => {
                const newTodo = {
                        id: 3,
                        name, name
                }
                setTodoList([...todoList, newTodo])
        }
        
    return (
            <>
                    <TodoTitle></TodoTitle>
                    <TodoNew addNewTodo={addNewTodo}></TodoNew>
                    <TodoList name={HuuDung} age={age} todoList={todoList}></TodoList>
            </>
    )
}

export default App