
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import TaskList from './components/taskList'
import Home from './components/taskHome';
import AddTask from './components/addTask';

import './css/style.css';


class App extends Component {
    render(){
        return (
                    <Router>
                        <div className="App">
                            <Switch>
                                <Route exact path="/" component={Home} />
              
                                <Route path="/new_task" component={AddTask} />
                                <Route path="/tasks" component={TaskList} />
                            </Switch>
                        </div>
                    </Router>
        
        )
    }
}

 export default App;
