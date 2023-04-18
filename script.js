const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.querySelector('#username').value;
  const password = event.target.querySelector('#password').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'protected.html');
  xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      window.location.href = 'protected.html';
    } else {
      const error = document.createElement('p');
      error.classList.add('error');
      error.textContent = 'Invalid username or password.';
      loginForm.appendChild(error);
    }
  }
  
  xhr.send();
});
