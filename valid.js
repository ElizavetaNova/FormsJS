const requiredFields = ['firstNameRider', 'lastNameRider', 'dateBirthdayRider', 'email', 'nameHorse', 'city'];
const textFields = ['firstNameRider', 'lastNameRider', 'nameHorse', 'colorHorse', 'horseBreed'];
const RUSSIAN_REGEX = /^[А-Яа-я]{2,}$/;
const inputs = Array.from(document.querySelectorAll('#applicant-form input'));
let errorParagraph;

window.addEventListener('load', () => {
    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.pattern = '^[А-Я][а-я]{2,}$');

    inputs.filter(input => requiredFields.includes(input.name))
        .forEach(input => input.required = true);

    const dateBirthday = document.querySelector('input[name=dateBirthdayRider]');
    dateBirthday.addEventListener('click', () => {
        //Валидация даты рождения наездника(от 16 лет)
        let dtToday = new Date();
        let month = dtToday.getMonth();
        let day = dtToday.getDate();

        if (month < 10)
            month = '0' + month.toString();
        if (day < 10)
            day = '0' + day.toString();

        let maxYear = dtToday.getFullYear() - 16;
        let maxDateMy = maxYear + '-' + month + '-' + day;
        document.getElementById('dateBirthdayRider').setAttribute("max", maxDateMy);
    });

    const errors = {}

    const PHONE_PATTERN = /^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

    const phoneNumber = document.querySelector('input[name=phone]');
    phoneNumber.pattern = PHONE_PATTERN.source;
    phoneNumber.addEventListener('input', () => {
        const inputErorr = errors[phoneNumber.name];
        console.log(phoneNumber.pattern);
        console.log(!phoneNumber.value.match(RegExp(phoneNumber.pattern)));
        console.log(phoneNumber.name);
        if (!phoneNumber.value.match(RegExp(phoneNumber.pattern))) {
            phoneNumber.style.borderColor = "red";
            createError(phoneNumber, "Введите номер телефона в формате 8(ххх)ххх-хх-хх");            
        } else {
            phoneNumber.style.borderColor = "black";
            inputErorr?.remove();
            errors[phoneNumber.name] = null;
        }
    });
    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.addEventListener('input', () => {

            const russian = RegExp(input.pattern).test(input.value);
            const inputErorr = errors[input.name];
            if (russian == false) {
                createError(input, "Заполните поле кирилицей, начиная с заглавной буквы");
            } else {
                inputErorr?.remove();
                errors[input.name] = null;

            }
        }));

    function createError(input, text) {
        const errorElement = errors[input.name] ?? document.createElement('p');
        errorElement.innerText = text;

        if (errors[input.name]) return;

        errorElement.classList.add('input-error');
        input.parentNode.appendChild(errorElement);
        errors[input.name] = errorElement;
    }
});



