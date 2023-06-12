import logo from './logo.svg';
import './App.css';
import UserList from './components/users-list';
import SignUpForm from '../src/components/forms/signup/signUpForm';
import CardDelete from './components/CardWithDeleteOption/CardWithDelete';

function App() {
  return (
  <>
  {/* <UserList></UserList> */}
  <SignUpForm></SignUpForm>
  <CardDelete></CardDelete>
  </>
   
  );
}

export default App;
