import myJSON from '/json/data.json' assert { type: 'json' };
console.log(myJSON);

Array.from(myJSON.members).forEach(member => {
    const tr = document.createElement('tr');
    let td1 = document.createElement('td')
    td1.innerHTML = member.firstNameRider + ' ' + member.lastNameRider
    tr.appendChild(td1);
    let td2 = document.createElement('td')
    td2.innerHTML = member.dateBirthdayRider
    tr.appendChild(td2);
    let td3 = document.createElement('td')
    td3.innerHTML = member.phone
    tr.appendChild(td3);
    let td4 = document.createElement('td')
    td4.innerHTML = member.email
    tr.appendChild(td4);
    let td5 = document.createElement('td')
    td5.innerHTML = member.nameHorse
    tr.appendChild(td5);
    let td6 = document.createElement('td')
    td6.innerHTML = member.ageHorse
    tr.appendChild(td6);
    let td7 = document.createElement('td')
    td7.innerHTML = member.colorHorse
    tr.appendChild(td7);
    let td8 = document.createElement('td')
    td8.innerHTML = member.horseBreed
    tr.appendChild(td8);
    let td9 = document.createElement('td')
    td9.innerHTML = member.city
    tr.appendChild(td9);
    let td10 = document.createElement('td')
    td10.innerHTML = member.competition
    tr.appendChild(td10);
    let td11 = document.createElement('td')
    td11.innerHTML = member.participationEarlier
    tr.appendChild(td11);

    document.getElementById('table').appendChild(tr);
    })