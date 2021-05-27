import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EventContextProvider } from "./context/EventContext";

// Pages
import CreateEvent from "./pages/CreateEvent";
import Event from "./pages/Event";
import Dashboard from "./pages/Dashboard";

// Components
import Header from "./components/Header";

function App() {
  return (
    <EventContextProvider>
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Event} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create-event" component={CreateEvent} />
        </Router>
      </div>
    </EventContextProvider>
  );
}

export default App;
