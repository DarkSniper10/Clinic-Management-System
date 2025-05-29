
const patientList = document.getElementById('patient-list');
const patients = getPatients();

patients.forEach((p, i) => {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${p.name}</strong> (Age: ${p.age}, Token: ${p.token})<br>
    <textarea id="presc-${i}" rows="3" style="width:100%;" placeholder="Write prescription...">${p.prescription}</textarea>
    <button onclick="savePrescription(${i})">Save</button>`;
  patientList.appendChild(div);
});

function savePrescription(index) {
  const patients = getPatients();
  const text = document.getElementById(`presc-${index}`).value;
  patients[index].prescription = text;
  localStorage.setItem('patients', JSON.stringify(patients));
  alert('Prescription saved');
}
