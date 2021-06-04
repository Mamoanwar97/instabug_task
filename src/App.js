import React, {useState, useEffect} from 'react';
import './App.css';
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import Welcome from './components/Welcome';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const [logedin, setlogedin] = useState(false);
  useEffect(() =>
  {
      const login = localStorage.getItem("Instabug_login");
      setlogedin(login)
      console.log(login)
  }, []
)
  
  return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                    <Route exact path='/'>
                      {logedin !== null? <Welcome setlogedin={setlogedin} logedin={logedin}/> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path='/welcome'>
                      {logedin !== null? <Welcome setlogedin={setlogedin} logedin={logedin}/> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path='/login'>
                      {!!logedin === true?  <Redirect to="/welcome" /> : <LoginPage setlogedin={setlogedin} logedin={logedin}/>}
                    </Route>
                    <Route path='/404' component={NotFound} />
                    <Redirect from="/login" to="/login" />
                    <Redirect from="/welcome" to="/welcome"/>
                    <Redirect from="/" to="/404" />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
