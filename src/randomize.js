// Import the 'random-names-generator' module.
const generatorNames = require('random-names-generator');

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
        // Define an array of country names.
        const countryNames = [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
            "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
            "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
            "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
            "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo (Congo-Kinshasa)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)",
            "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland",
            "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
            "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
            "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
            "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
            "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
            "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia",
            "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman",
            "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
            "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
            "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
            "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
            "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
            "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
            "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        ];
        // Generate a random index to pick a country name from the array.
        const randomIndex = Math.floor(Math.random() * countryNames.length);
        return countryNames[randomIndex];
    },

    // Generate a random age within a specified range.
    generateAge: (minAge, maxAge) => {
        // Generate a random age between the specified minimum and maximum values.
        const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
        return randomAge;
    },

    // Generate a random religion.
    generateReligion: () => {
        // Define an array of religion names.
        const religionNames = [
            "Christianity",
            "Islam",
            "Hinduism",
            "Buddhism",
            "Sikhism",
            "Judaism",
            "Jainism"
        ];
        // Generate a random index to pick a religion name from the array.
        const randomIndex = Math.floor(Math.random() * religionNames.length);
        return religionNames[randomIndex];
    },

    // Generate a random city name.
    generateCity: () => {
        // Define an array of city names (e.g., Indian cities).
        const indianCities = [
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Kolkata",
            "Chennai",
            "Hyderabad",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Lucknow",
            "Kanpur",
            "Nagpur",
            "Patna",
            "Vadodara",
            "Indore",
            "Bhopal",
            "Surat",
            "Coimbatore",
            "Visakhapatnam",
            "Agra",
            "Varanasi",
            "Amritsar",
            "Kochi",
            "Mysore",
        ];
        // Generate a random index to pick a city name from the array.
        const randomIndex = Math.floor(Math.random() * indianCities.length);
        return indianCities[randomIndex];
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
};
