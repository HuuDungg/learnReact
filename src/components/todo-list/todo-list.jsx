const TodoList = (props) =>{
    console.log('ready to check props ' + JSON.stringify(props))

    const {name, age} = props
    return (
        <>
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{age}</li>
                </ul>
            </div>
        </>
    );
}

export default TodoList