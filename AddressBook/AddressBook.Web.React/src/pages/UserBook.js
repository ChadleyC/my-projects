import React, { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import CopyWright from '../components/copywritesection';
import Modal from '../components/modal';
import Users from '../components/UserBooks/Users';

export default class UserBook extends Component {
    render() {
        return (
            <>
                <Header />
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">User Book</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-book"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <Users />
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
