import { Link } from 'react-router-dom';
import LoginContext from './context/login-context';

const Header = (props) => {
    return (
        <LoginContext.Consumer>
            {(context) => {
                return (
                    <div className="menu">
                        <ul className="menu-list">
                            <li id="homeNav" className="menu-item"><Link to="/">Home{context.isLoggedIn}</Link></li>
                            <li id="expensesNav" className="menu-item"><Link to="/expenses">Expenses</Link></li>
                            <li id="problemsNav" className="menu-item"><Link to="/problems">Problems</Link></li>
                            <li id="outcomesNav" className="menu-item"><Link to="/outcomes">Outcomes</Link></li>
                            <li id="referralsNav" className="menu-item"><Link to="/referrals">Referrals</Link></li>
                            <li id="toursNav" className="menu-item"><Link to="/tours">Tours</Link></li>
                            <li id="reviewsNav" className="menu-item"><Link to="/reviews">Reviews</Link></li>
                            <li id="praticeNav" className="menu-item"><Link to="/pratice">Pratice</Link></li>
                            <li id="interviewNav" className="menu-item"><Link to="/interview">Interview</Link></li>
                            <li id="accordionNav" className="menu-item"><Link to="/accordion">Accordion</Link></li>
                            <li id="menuNav" className="menu-item"><Link to="/menu">Menu</Link></li>
                            <li id="jobsNav" className="menu-item"><Link to="/jobs">Jobs</Link></li>
                            <li id="postsNav" className="menu-item"><Link to="/posts">Posts</Link></li>
                            <li id="postsNav" className="menu-item"><Link to="/learning">Learning</Link></li>
                            <li id="udemy" className="menu-item"><Link to="/udemy">Udemy</Link></li>
                            <li id="shopping" className="menu-item"><Link to="/shopping">Shopping</Link></li>
                            <li id="error" className="menu-item"><Link to="/error">Error</Link></li>
                        </ul>
                    </div>)
            }}

        </LoginContext.Consumer>
    );

}
export default Header;