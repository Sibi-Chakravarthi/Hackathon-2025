document.addEventListener('DOMContentLoaded', () => {
  const loginPage = document.getElementById('login-page');
  const appPage = document.getElementById('app-page');
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');
  const menuButtons = document.querySelectorAll('.menu-btn');

  // Simple login simulation
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginPage.classList.remove('active');
    appPage.classList.add('active');
  });

  logoutBtn.addEventListener('click', () => {
    appPage.classList.remove('active');
    loginPage.classList.add('active');
  });

  // Button navigation to webpages
  const pageMap = {
    patients: 'patients.html',
    fooddb: 'fooddb.html',
    dietchart: 'dietchart.html'
  };

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-section');
      if (pageMap[target]) {
        window.location.href = pageMap[target];
      }
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Show home page if #home in URL
  if (window.location.hash === '#home') {
    loginPage.classList.remove('active');
    appPage.classList.add('active');
  }
});
