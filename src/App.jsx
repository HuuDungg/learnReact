import TodoTitle from './components/todo-title/Todo-title'
import TodoNew  from './components/todo-new/todo-new'
import TodoList  from './components/todo-list/todo-list'
import { useState } from 'react';
const HuuDung = "Tran Huu Dung";
const age = 22;

const addNewFuncton = (name) => {
        console.log("call me " + name)
}


const App = () => {
        const [todoList, setTodoList] = useState([
                {id: 1, name: "learn english" },
                {id: 2, name: "learn java" },
                {id: 3, name: "learn python" }
        ])
    return (
            <>
                    <TodoTitle></TodoTitle>
                    <TodoNew addNewFuncton={addNewFuncton}></TodoNew>
                    <TodoList name={HuuDung} age={age} todoList={todoList}></TodoList>
            </>
    )
}

export default App