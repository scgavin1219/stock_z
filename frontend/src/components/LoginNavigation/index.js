import { Link } from "react-router-dom"
import stockX from "../../assets/StockX_logo2.png"
import './LoginNavigation.css'

function LoginNavigation() { 

    return (
        <nav className="login-nav">
            <Link to="/"><img src={stockX}/></Link>
        </nav>
    )
}

export default LoginNavigation