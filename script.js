document.addEventListener('DOMContentLoaded', () => {
  const loginPage = document.getElementById('login-page');
  const appPage = document.getElementById('app-page');
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');
  const navButtons = document.querySelectorAll('nav .nav-btn');
  const sections = document.querySelectorAll('main .section');
  const dietForm = document.getElementById('diet-form');
  const dietResult = document.getElementById('diet-result');

  // Simple login simulation
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // For prototype, accept any username/password
    loginPage.classList.remove('active');
    appPage.classList.add('active');
  });

  logoutBtn.addEventListener('click', () => {
    appPage.classList.remove('active');
    loginPage.classList.add('active');
  });

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-section');
      sections.forEach(section => {
        if (section.id === target) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  });

  dietForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  document.getElementById('generate-diet').addEventListener('click', () => {
    const patient = document.getElementById('patient-select').value;
    // Mock diet chart output
    const dietChart = `
      <h3>Diet Chart for ${patient}</h3>
      <ul>
        <li>Breakfast: Warm rice porridge with turmeric</li>
        <li>Lunch: Steamed vegetables with ghee and chapati</li>
        <li>Snack: Herbal tea</li>
        <li>Dinner: Khichdi with mild spices</li>
      </ul>
      <p><em>All meals are balanced according to Ayurvedic principles.</em></p>
    `;
    dietResult.innerHTML = dietChart;
  });

  // Accessibility improvements: focus styles for buttons
  navButtons.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});
