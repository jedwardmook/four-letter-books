import AddBook from './AddBook';
import './App.css';
import LoginForm from './LoginForm';
import Scanner from './Scanner';
import SignUpForm from './SignUpForm';

function App() {

  return (
    <div className="App">
      <AddBook/>
      <LoginForm />
      <SignUpForm />
      <Scanner />
    </div>
  );
}

export default App;
