
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Login from './components/login';
import AuthRoute from './components/authRoute';
import TaskList from './components/taskList'
import Home from './components/taskHome';
import AddTask from './components/addTask';

import './css/style.css';

let authenticated;
const token = localStorage.userToken;
if (token) {
    // const decodedToken = jwtDecode(token);
    // if(decodedToken.iat * 1002 < Date.now()){
    //     window.location.href = '/login';
    //     authenticated= false;
    // } else {
    //     authenticated = true;
    // }
    authenticated = true;
}


class App extends Component {
    render(){
        return (
                    <Router>
                        <div className="App">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <AuthRoute path="/login" component={Login} authenticated={authenticated}/>
                                <Route path="/new_task" component={AddTask} />
                                <Route path="/tasks" component={TaskList} />
                            </Switch>
                        </div>
                    </Router>
        
        )
    }
}

 export default App;