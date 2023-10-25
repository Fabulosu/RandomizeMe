const generatorNames = require('random-names-generator');
const axios = require('axios');

// Import data
const countries = require('../src/data/countries.json');
const religions = require('../src/data/religions.json');
const cities = require('../src/data/cities.json');

// Import data
const countries = require('../src/data/countries.json');
const religions = require('../src/data/religions.json');
const cities = require('../src/data/cities.json');

// Export an object with various functions for generating random data.
module.exports = {
    // Generate a random name.
    generateName: () => {
        // Use 'random-names-generator' to generate a random name.
        const randomName = generatorNames.random();
        return randomName;
    },

    // Generate a random phone number.
    generatePhone: () => {
        // Define the range for random phone numbers.
        const min = 1000000000;
        const max = 9999999999;
        // Generate a random number within the defined range and convert it to a string.
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString();
    },

    // Generate a random email address.
    generateEmail: () => {
        // Generate a random username by converting a random number to a base-36 string.
        const randomUsername = Math.random().toString(36).substring(7);
        // Combine the username with a common email domain.
        return `${randomUsername}@gmail.com`;
    },

    // Generate a random country name.
    generateCountry: () => {
        // Generate a random index to pick a country name from the array.
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    },

    // Generate a random age within a specified range.
    generateAge: (minAge, maxAge) => {
        // Generate a random age between the specified minimum and maximum values.
        const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
        return randomAge;
    },

    // Generate a random religion.
    generateReligion: () => {
        // Generate a random index to pick a religion name from the array.
        const randomIndex = Math.floor(Math.random() * religions.length);
        return religions[randomIndex];
    },

    // Generate a random city name.
    generateCity: (country) => {
        // If 'country' is not passed to function then a country is generated
        let selectedCountry = country || cities[`${module.exports.generateCountry()}`];

        // Check if the country has any cities in cities.json and return "No data" if not
        if (typeof selectedCountry === 'undefined') {
            return "No data"
        }

        // Generate a random index to pick a city name from the array.
        const randomIndex = Math.floor(Math.random() * selectedCountry.length);
        return selectedCountry[randomIndex];
    },

    // Generate a random state name.
    generateState: () => {
        // Define an array of state names (e.g., Indian states).
        const indianStates = [
            "Andaman and Nicobar Islands",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Puducherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "TamilNadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
        ];
        // Generate a random index to pick a state name from the array.
        const randomIndex = Math.floor(Math.random() * indianStates.length);
        return indianStates[randomIndex];
    },

    // Generate a random address using country, state, and city.
    generateAddress: () => {
        // Compose an address using generated country, state, and city names.
        return `${module.exports.generateCountry()}, ${module.exports.generateState()}, ${module.exports.generateCity()}`;
    },

    // Generate a random number within a specified range.
    generateRandomNumberInRange: (min, max) => {
        // Generate a random number within the specified range and return it.
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Generate a random boolean (true or false).
    generateRandomBoolean: () => {
        // Define an array of boolean values.
        const booleanArray = [true, false];
        // Generate a random index to pick a boolean value from the array.
        const randomIndex = Math.floor(Math.random() * booleanArray.length);
        return booleanArray[randomIndex];
    },

    // Generate a random item from an array.
    generateRandomItem: (array) => {
        // Generate a random index to pick an item from the provided array.
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    },

    // Generate a random unique identifier (ID).
    generateId: () => {
        // Define a range for random ID generation.
        const min = 1000000000000000;
        const max = 9999999999999999;
        // Generate a random number within the specified range and convert it to a base-36 string.
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString(36);
    },

    // Generate a random password with customizable options.
    generatePassword: (passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) => {
        // Define character sets for uppercase letters, lowercase letters, numbers, and special characters.
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let validChars = '';
        // Check the user's options and include the specified character sets in the valid characters.
        if (includeUppercase) {
            validChars += uppercaseChars;
        }
        if (includeLowercase) {
            validChars += lowercaseChars;
        }
        if (includeNumbers) {
            validChars += numberChars;
        }
        if (includeSpecialChars) {
            validChars += specialChars;
        }
        // If no valid characters are selected, return an error message.
        if (validChars.length === 0) {
            return 'Invalid character options.';
        }
        let password = '';
        // Generate a random password of the specified length using the valid character set.
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            password += validChars[randomIndex];
        }

        return password;
    },

    // Generate a random file name with a customizable extension.
    generateFileName: (fileNameLength, extension) => {
        // Define allowed characters for file names.
        const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let fileName = '';
        // Generate a random file name using the allowed characters and the specified length.
        for (let i = 0; i < fileNameLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            fileName += allowedChars.charAt(randomIndex);
        }
        // Combine the file name with the provided extension.
        const randomFileName = fileName + '.' + extension;
        return randomFileName;
    },

    // Generate a random string with required length.
    generateString: (length) => {
        // Define allowed characters for string.
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomString = '';
        // Generate a random string name using the allowed characters and the specified length.
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    },

    // Generate a random object .
    generateObject: () => {
        const randomObject = {}
        // Object length 
        const count = Math.floor(Math.random() * 8) + 1
        for (let i = 0; i < count; i++) {
            // generate a object key
            const objectKey = module.exports.generateString(5)
            // object value
            const objectValue = Math.random()
            randomObject[objectKey] = objectValue
        }
        return randomObject;
    },

    //Randomize the order of words in a text
    randomTextScrambler: (text) => {
        // Split the input text into an array of words
        const words = text.split(' ');
        const scrambledWords = [];
        while (words.length > 0) {
            // Generate a random index within the remaining words
            const randomIndex = Math.floor(Math.random() * words.length);
            // Remove the word from the original array and add it to the scrambled array
            scrambledWords.push(words.splice(randomIndex, 1)[0]);
        }
        const scrambledText = scrambledWords.join(' ');
        return scrambledText;
    },

    // Random flip the coin
    generateRandomCoinFlip: () => {
        const coinOptions = ['head', 'tails']
        // random index for 'head' and 'tails'
        const randomIndex = Math.floor(Math.random() * coinOptions.length);
        return coinOptions[randomIndex]
    },

    // Generate random url with required url length
    generateRandomURL: (urlLength) => {
        const randomUrl = `http://${module.exports.generateString(urlLength)}/`
        return randomUrl
    },

    // Generate a random quote 
    generateRandomQuote: async () => {
        const response = await axios.get('https://zenquotes.io/api/random');
        const quote = response.data[0].q;
        return quote
    },

    // Generate a random color rgb value
    generateRandomColorRGB: () => {
        // Generate random values for red, green, and blue components
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`
        return randomColor
    }
};
