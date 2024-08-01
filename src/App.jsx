import TodoTitle from './components/todo-title/Todo-title'
import TodoNew  from './components/todo-new/todo-new'
import TodoList  from './components/todo-list/todo-list'
const HuuDung = "Tran Huu Dung";
const age = 22;
const App = () => {
    return (
            <>
                    <TodoTitle></TodoTitle>
                    <TodoNew></TodoNew>
                    <TodoList name={HuuDung} age={age}></TodoList>
            </>
    )
}

export default App