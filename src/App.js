
import Task from './components/Task';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Createtask from './components/Createtask';
import Header from './components/Header';
import Edittask from './components/Edittask';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/Createtask" component={Createtask}/>
          <Route path="/Task" component={Task}/>
          <Route path="/Edittask/:id" component={Edittask}/>
        
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
