class Validator {

    isEmail(input) {
        let isValidEmail = false;
        const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (input.match(emailFormat))
            isValidEmail = true;

        return isValidEmail;
    }

    isDomain(input) {
        let isValidDomain = false;
        if (input !== '')
            isValidDomain = true;
        return isValidDomain;
    }

    isDate(input) {
        let isValidDate = false;
        if (input !== '')
            isValidDate = true;
        return isValidDate;

    }

    isPhone(input) {
        let isValidPhone = false;
        const phoneFormat = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]?\d\d$/;
        if (input.match(phoneFormat))
            isValidPhone = true;

        return isValidPhone;

    }
}

var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru')); //true
console.log(validator.isDomain('itgirlschool.ru')); //true
console.log(validator.isDate('12.05.2021')); //true
console.log(validator.isPhone('+7(910)123-45-67')); //true


class ValidatorStatic {
    static isEmail(input) {
        let isValidEmail = false;
        const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (input.match(emailFormat))
            isValidEmail = true;

        return isValidEmail;
    }

    static isDomain(input) {
        let isValidDomain = false;
        if (input !== '')
            isValidDomain = true;
        return isValidDomain;
    }

    static isDate(input) {
        let isValidDate = false;
        if (input !== '')
            isValidDate = true;
        return isValidDate;

    }

    static isPhone(input) {
        let isValidPhone = false;
        const phoneFormat = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]?\d\d$/;
        if (input.match(phoneFormat))
            isValidPhone = true;

        return isValidPhone;

    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru')); //true
console.log(ValidatorStatic.isDomain('itgirlschool.ru')); //true
console.log(ValidatorStatic.isDate('12.05.2021')); //true
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));  //true