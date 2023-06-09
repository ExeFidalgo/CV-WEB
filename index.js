const form = document.getElementById('myForm');
const dataTable = document.getElementById('dataTable');
const tableBody = dataTable.getElementsByTagName('tbody')[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const salaryInput = document.getElementById('salary');
  const salary = parseFloat(salaryInput.value);

  if (name.trim() === '' || email.trim() === '' || message.trim() === '' || salaryInput.value.trim() === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  if (salary < 0) {
    alert('El salario debe ser un valor numérico positivo');
    return;
  }

  const row = tableBody.insertRow(-1);
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = email;
  row.insertCell(2).textContent = message;
  row.insertCell(3).textContent = (salary >= 0) ? salary.toFixed(2) : 'OFERTA RECHAZADA';

  const usdSalary = (salary / 500).toFixed(2);
  const eurSalary = (salary / 510).toFixed(2);
  row.insertCell(4).textContent = `$ ${usdSalary} USD`;
  row.insertCell(5).textContent = `€ ${eurSalary} EUR`;

  form.reset();

  // Ordenar la tabla alfabéticamente según el nombre
  sortTable();
});

function sortTable() {
  const rows = Array.from(tableBody.getElementsByTagName('tr'));

  rows.sort((a, b) => {
    const nameA = a.cells[0].textContent.toLowerCase();
    const nameB = b.cells[0].textContent.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < rows.length; i++) {
    tableBody.appendChild(rows[i]);
  }
}
