import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/header.component";
import Sidebar from "./components/SideBar/sidebar.component";
import Mail from "./components/MailListContent/mail.component";
import EmailList from "./components/MailListContent/emailList.component";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
