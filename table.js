const myJSON = await fetch('/json/data.json');
const data = await myJSON.json();

Array.from(data.members).forEach(member => {
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
    document.getElementById('table').appendChild(tr);
});