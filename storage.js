
function savePatient(data) {
  const patients = JSON.parse(localStorage.getItem('patients') || '[]');
  patients.push(data);
  localStorage.setItem('patients', JSON.stringify(patients));
}

function getPatients() {
  return JSON.parse(localStorage.getItem('patients') || '[]');
}
