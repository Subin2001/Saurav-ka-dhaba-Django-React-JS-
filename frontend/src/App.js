import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import Authentication from "./screens/Authentication";


function App() {
  return (
    <div className="App"> 
    <Router >
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/login' component={Authentication} exact/>
    </Router>
    </div>
  );
}

export default App;
