import { useState } from "react";

const TodoNew = ({addNewFuncton}) => {
    let valueInput = ''
    const [myInput, handleInput] = useState("Huu Dung")
    const handleOnChange = (name) => {
        console.log(`you are early change data in text ${name}`)
        handleInput(name)
    }

    const handleClick = () =>{
        console.log("early click " + myInput)
        let valueInput = myInput
    }

    

    return (
        <>
            <div className="todo-input">
                <label htmlFor="">Input your todo</label>
                <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
                <a 
                onClick={handleClick}
                >Save</a>
                <h1>my input is = {valueInput}</h1>
            </div>
        </>
    );
}

export default TodoNew