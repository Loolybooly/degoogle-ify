const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

document.querySelectorAll('.next-btn').forEach((btn) => {
  btn.addEventListener('click', () => changeStep(1));
});

document.querySelectorAll('.back-btn').forEach((btn) => {
  btn.addEventListener('click', () => changeStep(-1));
});

function changeStep(dir) {
  steps[currentStep].classList.remove('active');
  currentStep = Math.min(Math.max(currentStep + dir, 0), steps.length - 1);
  steps[currentStep].classList.add('active');
}

document.getElementById('survey-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('survey-form').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');
});
