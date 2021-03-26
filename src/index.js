import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import App from "./App";
import Upload from "./components/Upload";
// import ToBuy from "./pages/tobuy/toBuy";
import CreateWallet from "./pages/tobuy/creatingWallet";
import Trending from "./pages/trending/trending";
import SpinningCubes from "./pages/spinning_cubes/spinningCubes.js";
import BuySR from "./pages/tobuy/toBuySuperRare";
import LikesViews from "./pages/thoughts/feeds";
import Contact from "./pages/contact/contact";

import "./style/all.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={SpinningCubes} exact />
        <Route path="/exhibitions" component={App} />
        {/* <Route path="/toBuy" component={ToBuy} /> */}
        <Route path="/buySR" component={BuySR} />
        <Route path="/createWallet" component={CreateWallet} />
        <Route path="/trending" component={Trending} />
        <Route path="/thoughts" component={LikesViews} />
        <Route path="/videos" component={App} exact/>
        <Route path="/videos/:id" component={App} exact/>
        <Route path="/upload" component={Upload} exact />
        <Route path="/contact" component={Contact} /> 
        <Route path="/*"><Redirect to="/"/></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
