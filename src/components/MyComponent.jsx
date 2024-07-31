import './style.css';
const Dog = {
    name: "gau gau",
    descrioption: "over loyal"
}
const name = "Tran Huu Dung hihih"
const MyComponent = () => {
    return (
        <>
        <div>
            <h1 style={{color: 'red'}}>Hi there. My name is</h1> <h1 className='name'>{name}</h1>
            <h2>{JSON.stringify(Dog)}</h2>
        </div>
        </>
    );
}

export default MyComponent