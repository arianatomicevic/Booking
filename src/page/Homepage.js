import React from "react";
import Header from "./Header";
import Featured from "./Featured";
import "./Homepage.css";
import PropertyList from "./PropertyList";
import Hotels from "./Hotels";
import MailList from "./MailList";
import Footer from "./Footer";

function Homepage() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Pretražite po tipu smještaja:</h1>
        <PropertyList />
        <h1 className="homeTitle">Najbolje ocjenjeni hoteli:</h1>
        <Hotels />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
