function getFormData(form) {
    const formData = new FormData(form);

    const res = {
    };

    formData.forEach((value, key) => {
        if (!Reflect.has(res, key)) {
            res[key] = value;
            return;
        }
        if (!Array.isArray(res[key])) {
            res[key] = [res[key]];
        }
        res[key].push(value);
    });

    return res;
}

async function useFetch(data) {
    const response = await fetch('http://localhost:3000/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(response.json())
}

function useXmlHttpRequest(data) {
    const request = new XMLHttpRequest();
    request.open('POST', ' http://localhost:3000/members');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.onloadend = () => {
        console.log('Succeed!')
        console.log(request.response)
    }
}

window.addEventListener('load', () => {
    // document.forms.applicantForm OR
    const applicantForm = document.forms.applicantForm;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantForm);

        //value.competition = data.getAll("competition");

        document.getElementById('sended-data').innerText = JSON.stringify(data);
        useXmlHttpRequest(data);
    })
    const applicantFormSubmit = document.getElementById('applicantFormSubmit');

});