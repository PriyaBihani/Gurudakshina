import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/home";
import Donate from "./components/donate/donate";
import Help from "./components/needHelp/Help";
import About from "./components/aboutUs/about";
import Footer from "./components/layout/Footer";
import Admin from "./components/admin/dashboard/admin";
import teacherList from "./components/admin/adminComponents/teachersList";
import UpdateHomePage from "./components/home/updateHomePage";
import addHomeContent from "./components/home/addHomeContent";
import updateAboutPage from "./components/aboutUs/updateAboutPage";
import addAboutContent from "./components/aboutUs/addAboutContent";
import helpSeekers from "./components/helpSeekers/helpSeekers";
import carouselFormatting from "./components/admin/adminComponents/carousel/carouselFormatting";
import adminLogin from "./components/admin/adminLogin";
import subscribersList from "./components/admin/adminComponents/subscribersList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/donate" component={Donate} />
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
            <Route exact path="/adminpanel" component={Admin} />
            <Route path="/adminpanel/teacherslist" component={teacherList} />
            <Route path="/adminpanel/editHomePage" component={UpdateHomePage} />
            <Route
              path="/adminpanel/editAboutPage"
              component={updateAboutPage}
            />
            <Route exact path="/helpseekers" component={helpSeekers} />
            <Route path="/addHomePageContent" component={addHomeContent} />
            <Route path="/addAboutPageContent" component={addAboutContent} />
            <Route path="/carousel" component={carouselFormatting} />
            <Route exact path="/adminpanel/login" component={adminLogin} />
            <Route
              exact
              path="/adminpanel/sublist"
              component={subscribersList}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
