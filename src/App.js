import React from 'react';
import './App.css';
import mainPage from './components/main_page/mainPage.jsx'
import page1 from './components/Page1/page1.jsx'
import page2 from './components/Page2/page2.jsx'
import {
   BrowserRouter as Router,
   HashRouter,
   Switch,
   Route,
} from "react-router-dom";

function App() {
   return (
      <Router>
         <HashRouter>
            <Switch>
               <Route path="/" exact component={mainPage} />
               <Route path="/page1" component={page1} />
               <Route path="/page2" component={page2} />
            </Switch>
         </HashRouter>
      </Router>
   );
}

export default App;
