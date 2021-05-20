import React from 'react';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Aboutus from './pages/Aboutus';
import Healthcare from './pages/healthcare';
import Vaccine from './pages/vaccine';
import Tracker from "./pages/Tracker"
import Navbars from './components/Navbars';
import './App.css';
// Amplify.configure(awsconfig);




function App() {
  return (


    <Router>
      <Navbars />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Aboutus' component={Aboutus} />
        <Route path='/tracker' component={Tracker} />
        <Route path='/healthcare' component={Healthcare} />
        <Route path='/vaccine' component={Vaccine} />
      </Switch>
    </Router>


  );
}
{/* <AmplifySignOut /> */ }
export default (App);
// export default withAuthenticator(App, { includeGreetings: true });
