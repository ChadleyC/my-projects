import React, { Component } from 'react'
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Footer from '../components/footer';
import CopyWright from '../components/copywritesection';
import Modal from '../components/modal';

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Portfolio />
                <About />
                <Footer />
                <CopyWright />
                <Modal />
            </>
        )
    }
}
