const TodoList = (props) =>{
    const {todoList, setTodoList} = props
    const handleDelete = (id) => {
        // console.log(`this is id to remove ${id} and ${JSON.stringify()}`)
        setTodoList(todoList.filter(e => e.id !== id))
    }

console.log(props.todoList)
    return (
        <>
            <div>
                <ul>
                   {todoList.map((item, index) =>{
                        return (
                            
                                <div className={`todo-item`} key={item.id}>
                                    <div>{item.name} and {item.id}</div>
                                    <button onClick={(id) => handleDelete(item.id)}>Delete</button>
                                </div>
                            
                        )
                   })}
                </ul>
            </div>
        </>
    );
}

export default TodoList