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
        const domainFormat = /([\w-]+\.)+\w+/g;
        if (input.match(domainFormat))
            isValidDomain = true;
        return isValidDomain;
    }

    isDate(input) {
        let isValidDate = false;
        const dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (input.match(dateFormat))
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
        const domainFormat = /([\w-]+\.)+\w+/g;
        if (input.match(domainFormat))
            isValidDomain = true;
        return isValidDomain;
    }

    static isDate(input) {
        let isValidDate = false;
        const dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (input.match(dateFormat))
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