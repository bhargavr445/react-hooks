import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
                <li><Link to="/problems">Problems</Link></li>
                <li><Link to="/outcomes">Outcomes</Link></li>
            </ul>
        </div>
    );

}
export default Header;