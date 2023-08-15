import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddBook from './AddBook';
import '../Styles/App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AddForm from './AddForm';
import SearchBook from './SearchBook';
import AddFormFromISBN from './AddFormFromISBN';
import BooksMain from './BooksMain';
import NavBar from './NavBar';



function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='login'
            element= {<LoginForm />}
            />
          <Route path='signup'
            element= {<SignUpForm />}
            /> 
          <Route path='add_book'
            element={<AddBook />}
            />
          <Route path='add_book_isbn'
            element={<SearchBook />}
            />
          <Route path='add_book_form'
            element={<AddForm />}
            />
          <Route path='add_book_form_isbn'
            element={<AddFormFromISBN />}
            />
          <Route exact path='/'
            element={<BooksMain />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
