export default class Profile {
    constructor({ truck, driver, token }) {
        this.location = null;
        this.driver = driver;
        this.truck = truck;
        this.token = token;
    }

    set location(location) {
        this.location = location;
    }

    get name() {
        return this?.driver?.name;
    }

    get document() {
        return this?.driver?.document;
    }

    get plateCarriage() {
        return this?.truck?.plateCarriage;
    }

    get numberOfCompartments() {
        return this?.truck?.numberOfCompartments;
    }

    get location() {
        return this?.location;
    }
}