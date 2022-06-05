const requiredFields = ['firstNameRider', 'lastNameRider', 'dateBirthdayRider', 'email', 'nameHorse', 'city', 'participationEarlier'];
const textFields = ['firstNameRider', 'lastNameRider', 'nameHorse', 'colorHorse', 'horseBreed'];
const inputs = Array.from(document.querySelectorAll('.flex-column input'));
const PHONE_PATTERN = /^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

window.addEventListener('load', () => {
    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.pattern = '^[А-Я][а-я]{2,}$');

    inputs.filter(input => requiredFields.includes(input.name))
        .forEach(input => input.required = true);

    setMaxMinDate();

    const errors = {}
        
    const phoneNumber = document.querySelector('input[name=phone]');
    phoneNumber.pattern = PHONE_PATTERN.source;
    phoneNumber.addEventListener('input', () => {
        const inputErorr = errors[phoneNumber.name];
        if (!phoneNumber.value.match(RegExp(phoneNumber.pattern))) {
            phoneNumber.classList.add('invalid-input');
            createError(phoneNumber, "Введите номер телефона в формате 8(ххх)ххх-хх-хх");
        } else {
            phoneNumber.classList.remove('invalid-input');
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

    const ageHorse = document.querySelector('input[name=ageHorse]');
    const minAgeHorse = 2;
    const maxAgeHorse = 15;
    ageHorse.setAttribute("min", minAgeHorse);
    ageHorse.setAttribute("max", maxAgeHorse);

    function createError(input, text) {
        const errorElement = errors[input.name] ?? document.createElement('p');
        errorElement.innerText = text;

        if (errors[input.name]) return;

        errorElement.classList.add('input-error');
        input.parentNode.appendChild(errorElement);
        errors[input.name] = errorElement;
    }
});


function setMaxMinDate() {
    const dateBirthday = document.querySelector('input[name=dateBirthdayRider]');
    //Валидация даты рождения наездника(от 16 лет)
    const dtToday = new Date();
    let month = dtToday.getMonth();
    let day = dtToday.getDate();

    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    const minYearsOld = 16;

    const maxYear = dtToday.getFullYear() - minYearsOld;
    const maxDateMy = `${maxYear}-${month}-${day}`;
    dateBirthday.setAttribute("max", maxDateMy);
}
