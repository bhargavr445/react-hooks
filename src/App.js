import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExpensesOverview from './Expenses/Expenses-Overview';
import Problems from './fepoc/Problems/problems';
import MainRouting from './Main-Routing';
import NoPageFound from './No-page-Found';
import ProductDetails from './fepoc/Problems/product-details';
import Outcomes, { getAllUsers } from './fepoc/outcomes/Outcomes';
import ReferralsOerview from './fepoc/Referrals/referrals-oerview';
import LoginContext from './context/login-context'
import Login from './Login';
import ToursOverview from './tours/tours-overview';
import ReviewsOverview from './reviews/Reviews-Overview';
import Pratice from './pratice/pratice';
import UserSearch from './interview/UserSearch';
import Interview from './interview/Interview';
import InterviewDetails from './interview/InterviewDetails';
import Accordion from './Accordion/Accordion';
import Menu from './Menu/Menu-overview';
import JobsOverview from './Jobs/Jobs-Overview';
import PostsOverview from './Posts/Posts-Overview';
import LearningOverview from './Learning/Learning-Overview';
import Overview from './Udemy/Components/Overview';
import ShpiingOverview from './Shopping/Overview';
import Mens from './Shopping/Mens';
import Womens from './Shopping/Womens';
import ShoppingHome from './Shopping/Home';
import Kids from './Shopping/Kids';
// https://app.powerbi.com/groups/9059ddf1-99a1-45c3-8914-1eb3f78fccd4/reports/bbe6c58c-a92d-4b0f-ac1c-d8c2d7811fe5?ctid=de810bec-18a3-479a-8c6f-185945c981d3&pbi_source=linkShare
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
            { path: 'problemsDetails', element: <ProductDetails /> }
          ]
        },
        { path: '/outcomes', element: <Outcomes />, loader: getAllUsers },
        { path: '/referrals', element: <ReferralsOerview /> },
        { path: '/tours', element: <ToursOverview /> },
        { path: '/reviews', element: <ReviewsOverview /> },
        { path: '/pratice', element: <Pratice /> },
        { path: '/accordion', element: <Accordion /> },
        { path: '/menu', element: <Menu /> },
        { path: '/jobs', element: <JobsOverview /> },
        { path: '/posts', element: <PostsOverview /> },
        { path: '/learning', element: <LearningOverview /> },
        { path: '/udemy', element: <Overview /> },
        {
          path: '/interview', element: <Interview />, children: [
            { path: '', element: <UserSearch /> },
            { path: ':id', element: <InterviewDetails /> }
          ]
        }

      ]
  }, 
  {
    path: '/shopping', element: <ShpiingOverview />, children: [
      { path: 'home', element: <ShoppingHome /> },
      { path: 'men', element: <Mens /> },
      { path: 'women', element: <Womens /> },
      { path: 'kids', element: <Kids /> },
    ]
  }

]);

const App = () => {

  return (
    // <UserProvider>
    <LoginContext.Provider value={{ isLoggedIn: 'hello' }}>
      <RouterProvider router={routes} />
    </LoginContext.Provider>
    // </UserProvider>
  );

}

export default App;
