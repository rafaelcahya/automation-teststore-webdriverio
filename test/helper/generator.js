import { animals, uniqueNamesGenerator } from "unique-names-generator";

function generateUniqueName() {
    let randomName = uniqueNamesGenerator({
        dictionaries: [animals],
        length: 1,
    });
    while (randomName.length < 10) {
        randomName += uniqueNamesGenerator({
            dictionaries: [animals],
            length: 1,
        });
    }

    return randomName.substring(0, 10);
}

function generatePhonenumber() {
    return parseInt(Math.random().toFixed(6).replace("0.", ""));
}

function generateZipCode() {
    return parseInt(Math.random().toFixed(6).replace("0.", ""));
}

function generatePassword() {
    const randomName = uniqueNamesGenerator({
        dictionaries: [animals],
        length: 1,
    });
    return randomName;
}

function generateNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

export default {
    generateUniqueName,
    generatePhonenumber,
    generateZipCode,
    generatePassword,
    generateNumber,
};
