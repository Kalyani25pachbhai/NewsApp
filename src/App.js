import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import News from './News';
import { Routes, Route } from 'react-router-dom';  // ✅ only import Routes, Route
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 6;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress });
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pagesize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pagesize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pagesize} country="us" category="technology" />} />
        </Routes>
      </div>
    );
  }
}
