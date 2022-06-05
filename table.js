const myJSON = await fetch('http://localhost:3000/members');
const data = await myJSON.json();

data.forEach(member => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${member.firstNameRider} ${member.lastNameRider}</td>
                      <td>${member.dateBirthdayRider}</td>
                      <td>${member.phone}</td>
                      <td>${member.email}</td>
                      <td>${member.nameHorse}</td>
                      <td>${member.ageHorse}</td>
                      <td>${member.colorHorse}</td>
                      <td>${member.horseBreed}</td>
                      <td>${member.city}</td>
                      <td>${member.competition}</td>
                      <td>${member.participationEarlier}</td>`
    document.getElementById('table-body').appendChild(tr);
});