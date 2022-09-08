import logo from './logo.svg';
import './App.css';
import UserEntry from './views/UserEntry/UserEntry';
import UserList from './views/UserList/UserList';

function App() {
  return (
    <div className="App">
      <UserEntry/>
      <UserList/>
    </div>
  );
}

export default App;
