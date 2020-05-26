import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';


class App extends React.Component {
    constructor() {
        super();
        this.state ={};
    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainSection />
                <Footer />
            </div>
        );
    }
}

export default App;
