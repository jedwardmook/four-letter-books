import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddBook from './AddBook';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='login'
            element= {<LoginForm />}
            />
          <Route exact path='login'
            element= {<SignUpForm />}
            /> 
          <Route exact path='login'
            element={<AddBook/>}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
