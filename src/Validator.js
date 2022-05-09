export class Validator {
    constructor(username) {
        this.username = username
    }

    validateUsername() {
        const regExp = /^[a-zA-Z]{1}[-_a-zA-Z0-9]+[a-zA-Z]{1}$/gm;
        const regExp2 = /([\d]{4})+/;
        if(!this.username.match(regExp) || this.username.match(regExp2)) {
            return false;
        } else {
            return  true;
        }
    }
}