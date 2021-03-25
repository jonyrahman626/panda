import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LatestPhotos from './components/LatestPhoto/LatestPhotos';
import Banner from './components/Banner/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*==================================================
                          Header Part start 
        ==================================================*/}
        <Header />
        {/*==================================================
                          Header Part End 
        ==================================================*/}

        {/*==================================================
                          Banner Part start 
        ==================================================*/}
        <Banner />
        {/*==================================================
                          Banner Part End 
        ==================================================*/}

        {/*==================================================
                          Main Content Start 
        ==================================================*/}
        <div className="content_blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <h1>Latest  Photos</h1>
                  <div className="row">
                    <LatestPhotos />
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/*==================================================
                          Main Content end 
        ==================================================*/}
        
        {/*==================================================
                          Footer Part start 
        ==================================================*/}
        <Footer />
        {/*==================================================
                          Footer Part end 
        ==================================================*/}
      </div>
    );
  }
}

export default App;
