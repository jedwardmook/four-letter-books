import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../Styles/App.css';
import AddBook from './AddBook';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import SearchBook from './SearchBook';
import AddForm from './AddForm';
import BooksMain from './BooksMain';
import NavBar from './NavBar';
import BookPage from './BookPage';
import EditImagePage from './EditImagePage';



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
          <Route exact path='/'
            element={<BooksMain />}
            />
          <Route exact path='/books/:bookId'
            element={<BookPage />}
            />
          <Route exact path='/books/:bookId/image/:imageId'
            element={<EditImagePage />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
