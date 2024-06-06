import './App.css';  
import AppRoutes from './Components/Layouts/AppRoutes';
import { Fragment } from 'react/jsx-runtime';
import { BrowserRouter as Router} from 'react-router-dom'; 
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <Fragment> 
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
        <Router>
          <AppRoutes/>
        </Router> 
        {/* </SkeletonTheme> */}
    </Fragment>
  );
}

export default App;
