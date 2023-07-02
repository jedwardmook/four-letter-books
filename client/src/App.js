import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddBook from './AddBook';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AddForm from './AddForm';
import AddFormFromISBN from './AddFormFromISBN';
import SearchBook from './SearchBook';
import QrReaderContainer from './QrReaderContainer';


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
          <Route exact path='add_book'
            element={<AddBook />}
            />
          <Route exact path='add_book_form_isbn'
            element={<SearchBook />}
            />
          <Route exact path='add_book_form'
            element={<AddForm />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
