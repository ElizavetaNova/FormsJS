const requiredFields = ['firstNameRider', 'lastNameRider', 'dateBirthdayRider', 'email', 'nameHorse', 'city']
const textFields = ['firstNameRider', 'lastNameRider', 'nameHorse', 'colorHorse', 'horseBreed']

window.addEventListener('load', () => {
    const inputs = Array.from(document.querySelectorAll('#applicant-form input'));

    inputs.filter(input => requiredFields.includes(input.name))
        .forEach(input => input.required = true)

    inputs.filter(input => textFields.includes(input.name))
        .forEach(input => input.pattern = /[À-ß][à-ÿ]{2,}/)
        /*.forEach(input => input.pattern = '^[A-Z][a-z]{2,}$')*/

    const phoneInput = inputs.find(input => input.name === 'phone');
    //phoneInput.pattern = "/+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/im"
    
    //phoneInput.value = "+7(___)___-__-__"    
    phoneInput.placeholder = "+7(___)___-__-__"

});