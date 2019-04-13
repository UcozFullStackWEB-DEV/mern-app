import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Landing from "../layout/Landing";
import Footer from "../layout/Footer";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header>
              <Navbar />
            </header>
            <Route exact path="/" component={Landing} />
            <main>
              <div className="container">
                <Route path={"/register"} component={Register} />
                <Route path={"/login"} component={Login} />
              </div>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
