const planner = document.getElementById("planner");

const hours = [
  { label: "9 AM", hour: 9 },
  { label: "10 AM", hour: 10 },
  { label: "11 AM", hour: 11 },
  { label: "12 PM", hour: 12 },
  { label: "1 PM", hour: 13 },
  { label: "2 PM", hour: 14 },
  { label: "3 PM", hour: 15 },
  { label: "4 PM", hour: 16 },
  { label: "5 PM", hour: 17 },
];

const currentHour = new Date().getHours();

hours.forEach(({ label, hour }) => {
  const hourId = `hour-${hour}`;
  const savedTask = localStorage.getItem(hourId) || '';

  const timeBlock = document.createElement('div');
  timeBlock.classList.add('time-block');

  // Time-based class
  if (hour < currentHour) {
    timeBlock.classList.add('past');
  } else if (hour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }

  const hourLabel = document.createElement('div');
  hourLabel.className = 'hour';
  hourLabel.textContent = label;

  const taskInput = document.createElement('input');
  taskInput.className = 'task';
  taskInput.type = 'text';
  taskInput.value = savedTask;

  const saveButton = document.createElement('button');
  saveButton.className = 'save-btn';
  saveButton.textContent = '💾';

  saveButton.addEventListener('click', () => {
    localStorage.setItem(hourId, taskInput.value);
    saveButton.textContent = '✅';
    setTimeout(() => saveButton.textContent = '💾', 1000);
  });

  timeBlock.appendChild(hourLabel);
  timeBlock.appendChild(taskInput);
  timeBlock.appendChild(saveButton);

  planner.appendChild(timeBlock);
});
