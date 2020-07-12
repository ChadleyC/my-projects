import appconfig from '../configuration/appconfig';

export default class ServiceBase {
    constructor() {
        this.appconfig = new appconfig();
    }

    getUrl(methodCall){
        return this.appconfig.baseUrl + "/" + methodCall;
    }
}