const form = document.getElementById('myForm');
const dataTable = document.getElementById('dataTable');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const salary = document.getElementById('salary').value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '' || salary.trim() === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  const row = dataTable.insertRow(-1);
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = email;
  row.insertCell(2).textContent = message;
  row.insertCell(3).textContent = salary;

  const usdSalary = (parseFloat(salary) / 100).toFixed(2);
  const eurSalary = (parseFloat(salary) / 110).toFixed(2);
  row.insertCell(4).textContent = `$ ${usdSalary} USD`;
  row.insertCell(5).textContent = `€ ${eurSalary} EUR`;

  form.reset();
});
