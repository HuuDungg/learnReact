const TodoNew = ({addNewFuncton}) => {

    const handleOnChange = (name) => {
        console.log(`you are early change data in text ${name}`)
    }

    return (
        <>
            <div className="todo-input">
                <label htmlFor="">Input your todo</label>
                <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
                <button 
                onClick={addNewFuncton}
                >Save</button>
            </div>
        </>
    );
}

export default TodoNew