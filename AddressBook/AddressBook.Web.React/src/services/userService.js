import axios from 'axios';
import ServiceBase from './serviceBase';

export default class UserService extends ServiceBase {
    constructor() {
        super();
        this.usersUrl = 'users/';
    }

    getUsers() {
        return axios.get(this.getUrl(this.usersUrl));
    }

    saveUser(user) {
        return axios.post(this.getUrl(this.usersUrl), {user});
    }

    updateUser(user, id) {
        return axios.put(this.getUrl(this.usersUrl + id), {user});
    }

    deleteUser(id) {
        return axios.delete(this.getUrl(this.usersUrl+id));
    }
}