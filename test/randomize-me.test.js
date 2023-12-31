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
        const country = "india"
        const city = randomizeMe.generateCity(country);
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

    it('should generate a random Number', () => {
        const min = 10
        const max = 50
        const randomNumber = randomizeMe.generateRandomNumberInRange(min, max)
        expect(randomNumber).to.be.a('number');
    })

    it('should generate a random Boolean Value', () => {
        const booleanValue = randomizeMe.generateRandomBoolean();
        expect(booleanValue).to.be.a('boolean');
    })

    it('should generate a random item from the array', () => {
        const items = ["item1", "item2", "item3", "item4", "item5"];
        const randomItem = randomizeMe.generateRandomItem(items);
        expect(items).to.include(randomItem);
    });

    it('should generate a random Id ', () => {
        const booleanValue = randomizeMe.generateId();
        expect(booleanValue).to.be.a('string');
    })

    it('should generate a random password', () => {
        const passwordLength = 12;
        const includeUppercase = true;
        const includeLowercase = true;
        const includeNumbers = true;
        const includeSpecialChars = true;
        const password = randomizeMe.generatePassword(
            passwordLength,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSpecialChars
        );
        expect(password).to.be.a('string');
        expect(password).to.have.lengthOf(passwordLength);
        if (includeUppercase) {
            expect(password).to.match(/[A-Z]/);
        }
        if (includeLowercase) {
            expect(password).to.match(/[a-z]/);
        }
        if (includeSpecialChars) {
            expect(password).to.match(/[!@#$%^&*()_+-=\[\]{}|;:,.<>?]/);
        }
    });

    it('should generate a random file name with the specified extension', () => {
        const fileNameLength = 10;
        const extension = 'txt';
        const randomFileName = randomizeMe.generateFileName(fileNameLength, extension);
        expect(randomFileName).to.be.a('string');
        expect(randomFileName).to.match(/^[a-zA-Z0-9]{10}\.txt$/);
    });

    it('should generate a random string with the specified length', () => {
        const length = 15;
        const randomString = randomizeMe.generateString(length);
        expect(randomString).to.be.a('string');
        expect(randomString).to.have.lengthOf(length);
        expect(randomString).to.match(/^[a-zA-Z0-9]{15}$/);
    });

    it('should generate a random object with a random number of key-value pairs', () => {
        const randomObject = randomizeMe.generateObject();
        expect(randomObject).to.be.an('object');
        const keys = Object.keys(randomObject);
        const values = Object.values(randomObject);
        expect(keys).to.have.length.above(0);
        expect(keys.every(key => typeof key === 'string')).to.be.true;
        expect(values.every(value => typeof value === 'number')).to.be.true;
    });

    it('should scramble the order of words in a text', () => {
        const originalText = 'This is a test sentence for scrambling words';
        const scrambledText = randomTextScrambler(originalText);

        // Check if the scrambled text is not equal to the original text
        expect(scrambledText).to.not.equal(originalText);
    });

    it('should generate a random coin flip result', () => {
        const coinFlipResult = generateRandomCoinFlip();

        // Check if the result is either 'head' or 'tails'
        expect(coinFlipResult).to.satisfy(result => result === 'head' || result === 'tails');
    });

    it('should generate a random URL with the specified length', () => {
        const urlLength = 10; // Modify this as needed
        const randomUrl = generateRandomURL(urlLength);

        // Check if the length of the URL matches the expected length
        expect(randomUrl.length).to.equal(urlLength + 7); // 7 characters for 'http://'
    });

    it('should generate a random quote', async () => {
        const quote = await generateRandomQuote();

        // Check if the quote is a non-empty string
        expect(quote).to.be.a('string');
        expect(quote).to.not.be.empty;
        // You can add more specific checks based on the expected response
    });

    it('should generate a random RGB color', () => {
        const randomColor = generateRandomColorRGB();

        // Check if the color matches the RGB format (e.g., 'rgb(123, 45, 67)')
        expect(randomColor).to.match(/^rgb\(\d+, \d+, \d+\)$/);
    });

});
