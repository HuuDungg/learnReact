const TodoList = (props) =>{
    console.log('ready to check props ' + JSON.stringify(props))


console.log(props.todoList)
    return (
        <>
            <div>
                <ul>
                   {props.todoList.map((item, index) =>{
                        return (
                            
                                <div className={`todo-item`} key={item.id}>
                                    <div>{item.name} and {item.id}</div>
                                    <button>Delete</button>
                                </div>
                            
                        )
                   })}
                </ul>
            </div>
        </>
    );
}

export default TodoList