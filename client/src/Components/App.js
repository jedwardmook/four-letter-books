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
import StoreFront from './StoreFront';
import { BooksProvider } from '../context/books';



function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <BooksProvider>
        <Routes>
          <Route path='store'
            element= {<StoreFront />}
            />
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
        </BooksProvider>
      </div>
    </Router>
  );
}

export default App;
