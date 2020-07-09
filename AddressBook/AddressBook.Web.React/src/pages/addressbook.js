import React, { Component } from 'react'
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Footer from '../components/footer';
import CopyWright from '../components/copywritesection';
import Modal from '../components/modal';
import Addressbooks from '../components/AddressBook/addressbooks';

export default class addressbook extends Component {
    render() {
        return (
            <>
                <Header />
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Address Book</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i class="fas fa-book"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <Addressbooks />
                        </div>
                    </div>
                </section>
                <Footer />
                <CopyWright />
                <Modal />
            </>
        )
    }
}
