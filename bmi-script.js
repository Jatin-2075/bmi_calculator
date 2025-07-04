const button = document.querySelector('#button');
const clearbutton = document.querySelector('#clearbutton');
const nameInput = document.querySelector('#name');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const ul = document.querySelector('ul');

button.addEventListener('click', function () {
  const name = nameInput.value.trim();
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value); 

  if (!name || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid name, weight and height!");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters ** 2); 

  let category = "";
  if (bmi < 18.5) category = "Underweight 🥺";
  else if (bmi < 24.9) category = "Normal 💪";
  else if (bmi < 29.9) category = "Overweight 😬";
  else category = "Obese 🫠";

  const li = document.createElement('li');
  li.innerHTML = `<strong>${name}</strong>'s BMI is <strong>${bmi.toFixed(2)}</strong> — ${category}`;
  ul.appendChild(li);
});

clearbutton.addEventListener('click', () => {
  ul.innerHTML = '';
});
