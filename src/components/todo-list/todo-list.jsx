const TodoList = (props) =>{
    console.log('ready to check props ' + JSON.stringify(props))


console.log(props.todoList)
    return (
        <>
            <div>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.age}</li>
                    <li>dfsfds</li>
                </ul>
            </div>
        </>
    );
}

export default TodoList