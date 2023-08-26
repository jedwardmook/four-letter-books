import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../Styles/App.css';
import AddBook from './AddBook';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AddForm from './AddForm';
import SearchBook from './SearchBook';
import AddFormFromISBN from './AddFormFromISBN';
import BooksMain from './BooksMain';
import NavBar from './NavBar';
import BookPage from './BookPage';



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
            element={<AddFormFromISBN />}
            />
          <Route path='add_book_form_isbn'
            element={<AddFormFromISBN />}
            />
          <Route exact path='/'
            element={<BooksMain />}
            />
          <Route exact path='/books/:bookId'
            element={<BookPage />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
