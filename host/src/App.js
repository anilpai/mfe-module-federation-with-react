import React, { Suspense } from 'libs/react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'libs/react-router-dom';

import Heading from 'remote1/Heading';

const Button = React.lazy(() => import('remote1/Button'));

const App = () => {
  return (
    <Router>
      <div class="wrapper">
	      <header class="header">
		      Host Application Header
	      </header>
	    <aside class="aside">
        <nav>
	    	  <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/sales">Sales</Link></li>
		      </ul>
        </nav>
	    </aside>
	    <main class="main">
      <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/services">
              <Button />
            </Route>
            <Route path="/products">
              <Heading />
            </Route>
          </Switch>
        </Suspense>
	    </main>
	    <footer class="footer">
		    <span>&copy; Contoso Corp</span>
	    </footer>
    </div>
    </Router>
  );
};

export default App;
