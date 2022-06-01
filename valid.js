const requiredFields = ['firstNameRider', 'lastNameRider', 'dateBirthdayRider', 'email', 'nameHorse', 'city'];
const textFields = ['firstNameRider', 'lastNameRider', 'nameHorse', 'colorHorse', 'horseBreed'];
const RUSSIAN_REGEX = /^[А-Яа-я]{2,}$/;

window.addEventListener('load', () => {
    const inputs = Array.from(document.querySelectorAll('#applicant-form input'));
    console.log(inputs);

    inputs.filter(input => textFields.includes(input.id))
        .forEach(input => input.pattern = '^[А-Я][а-я]{2,}$');

    console.log(document.getElementsByName('lastNameRider').pattern);

    inputs.filter(input => requiredFields.includes(input.id))
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

    const firstNameRider = document.querySelector('input[name=firstNameRider]');
    firstNameRider.addEventListener('input', () => {
        validationTypeText(firstNameRider);
    });
    const lastNameRider = document.querySelector('input[name=lastNameRider]');
    lastNameRider.addEventListener('input', () => {
        validationTypeText(lastNameRider);
    });
    const nameHorse = document.querySelector('input[name=nameHorse]');
    nameHorse.addEventListener('input', () => {
        validationTypeText(nameHorse);
    });
    const colorHorse = document.querySelector('input[name=colorHorse]');
    colorHorse.addEventListener('input', () => {
        validationTypeText(colorHorse);
    });
    const horseBreed = document.querySelector('input[name=horseBreed]');
    horseBreed.addEventListener('input', () => {
        validationTypeText(horseBreed);
    });

    //let typeTextInputs = [];
    //inputs.forEach(input => {
    //    if (input.type == 'text') {
    //        typeTextInputs.push(input);
    //    }
    //});
    //console.log(typeTextInputs);


    //const typeTextInputs = Array.from(document.querySelector('input[type=text]'));
    //console.log(typeTextInputs);
    //typeTextInputs.forEach(input => {
    //    input.addEventListener('input', () => {
    //        validationTypeText(input);
    //    })
    //});
    
});
let errorParagraph = null;
function validationTypeText(input) {
    const russian = !!input.value.match(RUSSIAN_REGEX);
    const isFilled = input.value.length > 0;  

    if (isFilled && !russian && !errorParagraph) {
        errorParagraph = document.createElement('p');
        errorParagraph.style.color = "#FF0000";
        errorParagraph.innerText = "Заполните поле кирилицей, начиная с заглавной буквы"
        input.parentNode.appendChild(errorParagraph);
    }
    else if (russian && errorParagraph){
        errorParagraph.remove();
    }
}
     

