import React, { Component } from 'react'
import MaterialTable from "material-table";
import UserService from '../../services/userService';
import EditUserModal from './EditUserModal';
const $ = window.$;

export default class UserBooks extends Component {
  
    constructor() {
        super();
        this.userService = new UserService();
        this.entries = [];
        this.selectedUser = {};
        this.state = {
            entries: this.entries,
            selectedEntry: null
        };

        this.isLoading = false;
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        this.isLoading = true;
        this.userService.getUsers()
        .then(response => {
            this.isLoading = false;
            console.log(response);
            this.setState({
                entries: response.data,
                selectedEntry: null
            });
        })
        .catch(error => {
            alert(error);
        })
        .finally(() => {
            this.isLoading = false;
        });
    }

    saveUser(entry) {
        this.userService.saveUser(entry)
        .then(response => {
            this.state.entries.push(response.data);
        })
        .catch(error => {
            alert(error);
        });
    }

    updateUser(oldEntry, entry) { 
        this.userService.updateUser(entry, entry.id)
        .then(resp => {
            this.state.entries[this.state.entries.indexOf(oldEntry)] = entry;
        })
        .catch(error => {
            alert(error);
        });
        console.log("entry updated");
    }

    deleteUser(oldEntry) {
        console.log("entry delete");
        this.isLoading = true;
        this.state.entries.splice(this.state.entries.indexOf(oldEntry), 1);
        this.userService.deleteUser(oldEntry.id)
        .then(resp => {
            this.isLoading = false;
        })
        .catch(error => {
            alert(error);
        });
    }

    setSelectedUser(user) {
        this.selectedUser = user;
    }

    showModal() {
        var modal = $('#editUserModal');
        modal.modal('show');
    }

    onRowClick(event, rowData, me) {
        me.isLoading = true;
        me.setSelectedUser(rowData);
        me.showModal();
        me.isLoading = false;
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <MaterialTable 
                    columns={[
                        { title: "Full Name", field: "name" },
                        { title: "Email", field: "email" },
                        { title: "City", field: "address.city" },
                        { title: "Mobile Number", field: "phone"}
                    ]}
                    key="Id"
                    data={this.state.entries}
                    onRowClick={(event, rowData) => {this.onRowClick(event, rowData, this)}}
                    title="Contacts"
                    isLoading={this.isLoading}
                    detailPanel={rowData => {
                        return (
                        <form className="row col-lg-12" style={{padding: 25}}>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>User Info</h6>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.name} />
                                </div>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.email} />
                                </div>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.website} />
                                </div>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.phone} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Address Info</h6>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.address.street} />
                                </div>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.address.suite} />
                                </div>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.address.city} />
                                </div>
                                <div className="form-group">
                                    <input disabled className="form-control" value={rowData.address.zipcode} />
                                </div>
                            </div>
                        </form>
                        );
                    }} />
                <EditUserModal user={this.selectedUser}/>
            </div>
        )
    }
}
