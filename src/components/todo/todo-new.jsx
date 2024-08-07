import { useState } from "react";

const TodoNew = ({addNewTodo}) => {
    let valueInput = ''
    const [myInput, handleInput] = useState()
    const handleOnChange = (name) => {
        console.log(`you are early change data in text ${name}`)
        handleInput(name)
    }

    const handleClick = () =>{
        console.log("early click " + myInput)
        addNewTodo(myInput)
        handleInput("") 
    }

    

    return (
        <>
            <div className="todo-input">
                <label htmlFor="">Input your todo</label>
                <input type="text"
                 onChange={(event) => handleOnChange(event.target.value)}
                 value={myInput}
                 />
                <a 
                onClick={handleClick}
                >Save</a>
                <h1>my input is = {valueInput}</h1>
            </div>
        </>
    );
}

export default TodoNew