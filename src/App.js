import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExpensesOverview from './Expenses/Expenses-Overview';
import Problems from './fepoc/Problems/problems';
import MainRouting from './Main-Routing';
import Home from './Home';
import NoPageFound from './No-page-Found';
import ProductDetails from './fepoc/Problems/product-details';
import Outcomes, { getAllUsers } from './fepoc/outcomes/Outcomes';
import ReferralsOerview from './fepoc/Referrals/referrals-oerview';
import LoginContext from './context/login-context'
import Login from './Login';
import ToursOverview from './tours/tours-overview';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainRouting />,
    errorElement: <NoPageFound />,
    children:
      [
        { path: '/', element: <Login /> },
        { path: '/expenses', element: <ExpensesOverview /> },
        {
          path: '/problems', element: <Problems />, children: [
            { path: ':problemId', element: <ProductDetails /> }
          ]
        },
        { path: '/outcomes', element: <Outcomes />, loader: getAllUsers },
        { path: '/referrals', element: <ReferralsOerview /> },
        { path: '/tours', element: <ToursOverview /> }
        
      ]
  },

]);

const App = () => {

  return (
    <div>
      <LoginContext.Provider  value={{isLoggedIn: 'hello'}}>
      <RouterProvider router={routes}/>
      </LoginContext.Provider>
    </div>
  );

}

export default App;
