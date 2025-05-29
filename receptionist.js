
document.getElementById('patient-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('patient-name').value;
  const age = document.getElementById('patient-age').value;
  const token = Math.floor(1000 + Math.random() * 9000);

  const patient = { name, age, token, prescription: '' };
  savePatient(patient);
  alert(`Token generated: ${token}`);
  location.reload();
});

const tokenList = document.getElementById('token-list');
getPatients().forEach(p => {
  const div = document.createElement('div');
  div.innerText = `Token: ${p.token} | ${p.name}, Age: ${p.age}`;
  tokenList.appendChild(div);
});
