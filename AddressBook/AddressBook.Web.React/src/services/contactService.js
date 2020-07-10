import {restClient} from './restClient';

export default class ContactService {
    constructor() {
        this.baseUrl = "";
    }

    getContacts() {
        var result = [];
        result = restClient.get(this.baseUrl + "", null);
        return result;
    }

    saveContact() {

    }
    updateContact() {

    }

    deleteContact() {

    }
}