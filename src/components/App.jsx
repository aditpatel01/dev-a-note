import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from './About';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
  
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/About" component={About} exact/> 
            </Switch>

        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;



