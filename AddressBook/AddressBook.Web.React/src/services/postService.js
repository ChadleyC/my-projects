import {axios, AxiosRequestConfig} from 'axios';
import appconfig from '../configuration/appconfig';
import ServiceBase from './serviceBase';

export default class PostService extends ServiceBase {
    constructor() {
        this.appconfig = new appconfig();
    }

    getPosts() {
        return axios.get(this.getUrl("posts"));
    }

    savePost(post) {
        return axios.post(this.getUrl('post'), { post });
    }

    updatePost(post, id) {
        return axios.put(this.getUrl('posts/' + id), { post });
    }

    deletePost(id) {
        return axios.delete(this.getUrl('posts/' + id));
    }
}