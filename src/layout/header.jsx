import { Link, NavLink } from "react-router-dom"
const Header = () =>{
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li ><NavLink className="active" to='/home' >Home</NavLink></li>
                        <li ><NavLink className="active" to='/users' >user</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to='/users/signin'><span className="glyphicon glyphicon-user"></span> Sign in</NavLink></li>
                        <li><NavLink to='/users/login'><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header