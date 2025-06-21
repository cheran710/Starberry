import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './UI/Route/AppRouter';

function App() {
   const APP_NAME = process.env.REACT_APP_NAME;
  return (
     <Router basename={APP_NAME}>
        <AppRouter />
    </Router>
  );
}

export default App;
