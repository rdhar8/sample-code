import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './NavBar';
import Home from './Home';
import BookTable from './BookTable';

export default function LandingPage() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/booklist" component={BookTable} />
        </main>
      </div>
    </Router>
  );
}