import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li ><Link className="active" to='/home' >Home</Link></li>
                        <li ><Link className="active" to='/users' >user</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header