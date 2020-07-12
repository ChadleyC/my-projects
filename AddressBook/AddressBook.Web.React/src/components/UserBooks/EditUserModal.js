import React, { Component } from 'react'

export default function EditUserModal(user){
    return (
        <div style={{width: 100 + '%'}} className="portfolio-modal modal fade" id="editUserModal" tabIndex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">User</h2>
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                    <div className="divider-custom-line"></div>
                                    </div>
                                    <form className="row col-lg-12" style={{padding: 25}}>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <h6>User Info</h6>
                                            <div className="form-group">
                                                <input className="form-control" value={user.name} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" value={user.email} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" value={user.website} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" value={user.phone} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <h6>Address Info</h6>
                                            <div className="form-group">
                                                <input className="form-control" value={user.address?.street} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" value={user.address?.suite} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" value={user.address?.city} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" value={user.address?.zipcode} />
                                            </div>
                                        </div>
                                    </form>
                                    <button className="btn btn-primary" data-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
