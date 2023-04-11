import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExpensesOverview from './Expenses/Expenses-Overview';
import Problems from './fepoc/Problems/problems';
import MainRouting from './Main-Routing';
import Home from './Home';
import NoPageFound from './No-page-Found';
import ProductDetails from './fepoc/Problems/product-details';
import Outcomes, { getAllUsers } from './fepoc/outcomes/Outcomes';

const routes = createBrowserRouter([
  {
    path: '/', element: <MainRouting />, errorElement: <NoPageFound />,
    children:
      [
        { path: '/', element: <Home /> },
        { path: '/expenses', element: <ExpensesOverview /> },
        {
          path: '/problems', element: <Problems />, children: [
            { path: ':problemId', element: <ProductDetails /> }
          ]
        },
        { path: '/outcomes', element: <Outcomes />, loader: getAllUsers }
      ]
  },

]);

const App = () => {

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );

}

export default App;
