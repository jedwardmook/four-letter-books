import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddBook from './AddBook';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Scanner2 from './Scanner2';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='login'
            element= {<LoginForm />}
            />
          <Route exact path='signup'
            element= {<SignUpForm />}
            /> 
          <Route exact path='addbook'
            element={<AddBook/>}
            />
          <Route exact path='isbn_scanner'
            element={<Scanner2/>}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
