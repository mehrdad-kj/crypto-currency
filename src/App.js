import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails } from "./Components";
import "./App.css";


function App() {


  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route  path="/exchanges">
                <Exchanges />
              </Route>
              <Route  path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route  path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route  path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer" >
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
