function getFormData(form) {
    const formData = new FormData(form);
    const res = {
    };
    Array.from(formData.keys()).forEach(key => {
        res[key] = formData.getAll(key);
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
        alert("Ваша заявка принята");
        window.location.reload();
    }
}

window.addEventListener('load', () => {
    const applicantForm = document.forms.applicantForm;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantForm);
        useXmlHttpRequest(data);        
    })
});