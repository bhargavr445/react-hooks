import {Link} from 'react-router-dom';
import LoginContext from './context/login-context';

const Header = (props) => {
    return (
        <LoginContext.Consumer>
            {(context) => {
                return (        
                <div className="menu">
            <ul className="menu-list">
                <li className="menu-item"><Link to="/">Home{context.isLoggedIn}</Link></li>
                <li className="menu-item"><Link to="/expenses">Expenses</Link></li>
                <li className="menu-item"><Link to="/problems">Problems</Link></li>
                <li className="menu-item"><Link to="/outcomes">Outcomes</Link></li>
                <li className="menu-item"><Link to="/referrals">Referrals</Link></li>
                <li className="menu-item"><Link to="/tours">Tours</Link></li>
                <li className="menu-item"><Link to="/reviews">Reviews</Link></li>
            </ul>
        </div>)
            }}

        </LoginContext.Consumer>
    );

}
export default Header;