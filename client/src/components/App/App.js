import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import setAuthToken from "../../utils/setAuthToken";
import parseJwt from "../../utils/parseJWT";
import { setCurrentUser, logOutUser } from "../../actions/auth-actions";
import { clearCurrentProfile } from "../../actions/profile-actions";
import Navbar from "../layout/Navbar";
import Landing from "../layout/Landing";
import Footer from "../layout/Footer";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Dashboard from "../dashboard/dashboard";
import CreateProfile from "../Profile/create-profile";
import EditProfile from "../Profile/edit-profile";
import AddExperience from "../Profile/add-experience";
import AddEducation from "../Profile/add-education";
import Profiles from "../UserProfiles/user-profiles";
import UserProfilePage from "../UserProfiles/user-profile-page";
import "./App.css";

if (localStorage.jwtToken) {
  console.log("user is authenticated");
  const { jwtToken } = localStorage;
  setAuthToken(jwtToken);
  const decodedUser = parseJwt(jwtToken);
  store.dispatch(setCurrentUser(decodedUser));
  if (decodedUser.exp < Date.now() / 1000) {
    store.dispatch(clearCurrentProfile());
    store.dispatch(logOutUser());
    window.location.href = "/login";
  }
}

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
                <Route path={"/dashboard"} component={Dashboard} />
                <Route path={"/create-profile"} component={CreateProfile} />
                <Route path={"/edit-profile"} component={EditProfile} />
                <Route path={"/add-expirience"} component={AddExperience} />
                <Route path={"/add-education"} component={AddEducation} />
                <Route path={"/profiles"} component={Profiles} exact />
                <Route path={"/profiles/:id"} component={UserProfilePage} />
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
