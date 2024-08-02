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
                        <li ><NavLink className="active" to='/' >Home</NavLink></li>
                        <li ><NavLink className="active" to='/users' >User</NavLink></li>
                        <li ><NavLink className="active" to='/books' >Book</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to='/signin'><span className="glyphicon glyphicon-user"></span> Sign in</NavLink></li>
                        <li><NavLink to='/login'><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header