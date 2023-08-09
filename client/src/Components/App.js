import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddBook from './AddBook';
import '../Styles/App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AddForm from './AddForm';
import SearchBook from './SearchBook';
import AddFormFromISBN from './AddFormFromISBN';
import BooksMain from './BooksMain';



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
          <Route exact path='add_book_isbn'
            element={<SearchBook />}
            />
          <Route exact path='add_book_form'
            element={<AddForm />}
            />
          <Route exact path='add_book_form_isbn'
            element={<AddFormFromISBN />}
            />
          <Route exact path='books_main'
            element={<BooksMain />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
