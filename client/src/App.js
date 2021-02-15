import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Party from "./pages/Party";
import NoMatch from "./pages/NoMatch";
import MyNavbar from "./components/MyNavbar";
import PartyCreate from "./pages/PartyCreate";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { AuthProvider } from "./components/contexts/AuthContext.js";
// import Dashboard from "../src/components/Dashboard";
// import PrivatRoute from "../src/components/PrivatRoute";

import ForgotPassword from "../src/pages/ForgotPassword";

function App() {
     return (
          <Router>
               <MyNavbar />

               <AuthProvider>
                    <Switch>
                         <Route exact path={["/", "/home"]}>
                              <Home />
                         </Route>
                         <Route exact path="/login">
                              <Login />
                         </Route>
                         <Route exact path="/create-account">
                              <CreateAccount />
                         </Route>
                         <Route exact path="/party">
                              <Party />
                         </Route>
                         <Route exact path="/partycreate">
                              <PartyCreate />
                         </Route>

                         <Route path="/forgot-password">
                              <ForgotPassword />
                         </Route>
                         <Route>
                              <NoMatch />
                         </Route>
                         {/* <Route exact path={["/", "/home"]}>
                              <Home />
                         </Route>
                         <Route exact path="/login">
                              component={Login}
                         </Route>

                         <Route exact path="/create-account">
                              component={CreateAccount}
                         </Route>

                         <Route exact path="/party">
                              component={Party}
                         </Route>

                         <Route exact path="/partycreate">
                              component={PartyCreate}
                         </Route>

                         <Route path="/forgot-password">
                              component={ForgotPassword}
                         </Route>

                         <Route component={NoMatch}></Route> */}
                    </Switch>
               </AuthProvider>
          </Router>
     );
}

export default App;
