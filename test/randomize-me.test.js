const chai = require('chai');

const randomizeMe = require('../src/randomize');

const expect = chai.expect;

describe('Randomize Me', () => {
    it('should generate a random name', () => {
        const name = randomizeMe.generateName();
        expect(name).to.be.a('string');
    });

    it('should generate a random phone number', () => {
        const phone = randomizeMe.generatePhone();
        expect(phone).to.match(/^\d{10}$/);
    });

    it('should generate a random email', () => {
        const email = randomizeMe.generateEmail();
        expect(email).to.match(/^.+@gmail\.com$/);
    });

    it('should generate a random country', () => {
        const country = randomizeMe.generateCountry();
        expect(country).to.be.a('string');
    });

    it('should generate a random age within the specified range', () => {
        const minAge = 18;
        const maxAge = 65;
        const age = randomizeMe.generateAge(minAge, maxAge);
        expect(age).to.be.at.least(minAge).and.at.most(maxAge);
    });

    it('should generate a random religion', () => {
        const religion = randomizeMe.generateReligion();
        expect(religion).to.be.a('string');
    });

    it('should generate a random city', () => {
        const city = randomizeMe.generateCity();
        expect(city).to.be.a('string');
    });

    it('should generate a random state', () => {
        const state = randomizeMe.generateState();
        expect(state).to.be.a('string');
    });

    it('should generate a random address', () => {
        const address = randomizeMe.generateAddress();
        expect(address).to.be.a('string');
    });
});
