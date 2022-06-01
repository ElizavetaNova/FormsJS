const requiredFields = ['firstNameRider', 'lastNameRider', 'dateBirthdayRider', 'email', 'nameHorse', 'city']
const textFields = ['firstNameRider', 'lastNameRider', 'nameHorse', 'colorHorse', 'horseBreed']

window.addEventListener('load', () => {
    const inputs = Array.from(document.querySelectorAll('#applicant-form input'));

    inputs.filter(input => requiredFields.includes(input.name))
        .forEach(input => input.required = true);

    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.pattern = '^[А-Я][а-я]{2,}$');

    console.log(document.getElementsByName('lastNameRider').pattern);

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

        //let minYear = dtToday.getFullYear() - 30;
        //let minDateMy = minYear + '-' + month + '-' + day;

        document.getElementById('dateBirthdayRider').setAttribute("max", maxDateMy);
        //document.getElementById('dateBirthdayRider').setAttribute("min", minDateMy);
    });

    
    //inputs.filter(input => textFields.includes(input.name))
    //.forEach(input => input.setCustomValidity('Вводите данные крилицей, начиная с заглавной буквы.'));
    
    /*inputs.filter(input => textFields.includes(input.name))*/
    //textInputs.forEach(input => {
    //        input.addEventListener('input', () => {
    //            if (input.value == "") {
    //                errorParagraph = document.createElement('p');
    //                errorParagraph.style.color = "#FF0000";
    //                errorParagraph.innerText = "Ты че Пендосина?!"
    //                input.parentNode.appendChild(errorParagraph);
    //            }
    //        })
    //    });
                
            
    //for (var i = 0; i < inputs.length; i++) {
    //    inputs[i].setCustomValidity('Plz enter on Alphabets');
    //    parent = inputs[i].parentNode;
    //    parent.insertAdjacentHTML("beforeend", "<div class='error-message'>" +
    //        inputs[i].validationMessage +
    //        "</div>");
    //}

    
    //const regex = new RegExp("^\+7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}$", 'g');
    //const phoneInput = inputs.find(input => input.name === 'phone');
    //phoneInput.pattern = regex;
    //console.log(phoneInput.pattern);
    //phoneInput.pattern = '^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$';
        
    //phoneInput.value = "+7(___)___-__-__"    
    //phoneInput.placeholder = "+7(___)___-__-__"
     

});