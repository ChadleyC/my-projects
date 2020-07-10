import React, { Component } from 'react'
import MaterialTable from "material-table";

export default class addressbooks extends Component {
  
    constructor() {
        super();
        this.entries = [{
            Id: 1,
            FullName: "Steve Harvey",
            emailAddress: "steve@harvey.com",
            mobileNumber: "+27857149654",
            address: "Waterval 5-Ir, Midrand, 2066"
        }];

        this.state = {
            entries: this.entries,
            selectedEntry: null
        };

        this.isLoading = false;
    }

    getAddressBookEntries() {
        // get addressEntries from the api
        console.log("getting entries")
    }

    saveAddressBookEntry(entry) {
        // save addressEntry in the api
        console.log("entry added");
    }

    updateAddressBookEntry(oldEntry, entry) { 
        
        console.log("entry updated");
    }

    deleteAddressBookEntry(oldEntry) {
        console.log("entry delete");
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <MaterialTable 
                    columns={[
                        { title: "Full Name", field: "FullName" },
                        { title: "Email", field: "emailAddress" },
                        { title: "MobileNumber", field: "mobileNumber" },
                        { title: "Address", field: "address" }
                    ]}
                    key="Id"
                    data={this.state.entries}
                    editable={{
                        onRowAdd: (newData) => {
                            this.saveAddressBookEntry(newData)
                        },
                        onRowUpdate: (newData, oldData) => {
                            this.updateAddressBookEntry(oldData, newData)
                        },
                        onRowDelete: (oldData) => {
                            this.deleteAddressBookEntry(oldData)
                        },
                    }}
                    title="Contacts"
                    isLoading={this.isLoading}
                />
            </div>
        )
    }
}
