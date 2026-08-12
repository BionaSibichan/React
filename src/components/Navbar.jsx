import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li>CONTACT</li>
                <li>ABOUT</li>
                <li><Link to ='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>

            </ul>
        </nav>
    )
}
export default Navbar