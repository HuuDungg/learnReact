const TodoList = (props) =>{
    console.log('ready to check props ' + JSON.stringify(props))


console.log(props.todoList)
    return (
        <>
            <div>
                <ul>
                   {props.todoList.map((item, index) =>{
                        return (
                            <>
                                <li>{item.name} and {index} <a href="">Delete</a></li>
                            </>
                        )
                   })}
                </ul>
            </div>
        </>
    );
}

export default TodoList