import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AdminPage from "../pages/AdminPage/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ServicePage from "../pages/ServicesPage/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import BeautyPage from "../pages/CategoryPages/BeautyPage/Beauty";
import EditorialPage from "../pages/CategoryPages/EditorialPage/Editorial";
import FaqPage from "../pages/FaqPage/FaqPage";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";
import Footer from "./Footer/Footer";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import ContactsContainer from "./ContactsContainer/ContactsContainer";
import ContactDetails from "./ContactDetails/ContactDetails";
import "./App.scss";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
// Ready For Public (RFP)
const RFP_FLAG = true;

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.tokenReducer.token);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/admin-login" />
      }
    />
  );

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        let res = await axios.get(`${backendUrl}/portfolio`);
        dispatch({ type: "UPDATE_PORTFOLIO_DATA", newPortfolioData: res.data });
      } catch (err) {
        console.log(err);
      }

      try {
        let res = await axios.get(`${backendUrl}/services`);
        dispatch({ type: "UPDATE_SERVICES_DATA", newServicesData: res.data });
      } catch (err) {
        console.log(err);
      }

      try {
        let res = await axios.get(`${backendUrl}/questions`);
        dispatch({ type: "UPDATE_QUESTIONS_DATA", newQuestionsData: res.data });
      } catch (err) {
        console.log(err);
      }

      try {
        let res = await axios.get(`${backendUrl}/contact`);
        dispatch({ type: "UPDATE_CONTACTS_DATA", newContactsData: res.data });
      } catch (err) {
        console.log(err);
      }

      dispatch({ type: "FILTER_PORTFOLIO_DATA_BEAUTY" });

      setLoading(false);
    }

    getData();
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 1500);
    }
  }, [loading]);

  if (loading) {
    return <LoadingAnimation />;
  } else {
    return (
      <div className="App">
        {RFP_FLAG ? (
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about-me" component={AboutMePage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/services" component={ServicePage} />
              <Route path="/portfolio" exact component={PortfolioPage} />
              <Route path="/portfolio/bea" render={(props) => {
  console.log("Navigated to Beauty Page");
  return <BeautyPage {...props} />;
}} />
              <Route
           path="/portfolio/editorial"
       render={(props) => {
    console.log("Navigated to Editorial Page");
    return <EditorialPage {...props} />;
  }}
/>
              <Route path="/faq" component={FaqPage} />
              <PrivateRoute exact path="/getcontactlist" component={ContactsContainer} />
              <Route path="/getcontactlist/:id" component={ContactDetails} />
              <Route
                path="/instagram"
                component={() => {
                  let a = document.createElement("a");
                  a.target = "_blank";
                  a.href = "";
                  a.click();
                  return null;
                }}
              />
              <Route path="/terms-and-conditions" component={TermsConditions} />
              <PrivateRoute path="/admin" component={AdminPage} />
              <Route path="/admin-login" component={AdminLoginPage} />
            </Switch>
            <Footer />
          </BrowserRouter>
        ) : (
          <>
            <div style={{ fontSize: "128px" }}>UNDER MAINTENANCE</div>
            <div style={{ fontSize: "128px" }}>CHECK BACK SOON</div>
            <BrowserRouter>
              <Switch>
                <PrivateRoute path="/admin" component={AdminPage} />
                <Route path="/admin-login" component={AdminLoginPage} />
              </Switch>
              <Footer />
            </BrowserRouter>
          </>
        )}
      </div>
    );
  }
}

export default App;
