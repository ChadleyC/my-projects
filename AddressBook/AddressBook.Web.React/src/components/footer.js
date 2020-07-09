import React, { Component } from 'react'

class footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Midrand
                                <br />
                                Johannesburg
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" target="new" href="https://www.linkedin.com/in/chadley-clark-1129b860/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" target="new" href="https://github.com/ChadleyC/my-projects"><i className="fab fa-fw fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    
} export default footer;
