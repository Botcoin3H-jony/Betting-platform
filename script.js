 
// Dummy user data
let users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Function to handle user login
function loginUser(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // User authenticated, implement further functionality like redirecting to betting page
    console.log('User logged in successfully');
  } else {
    console.log('Invalid username or password');
  }
}

// Function to handle user sign up
function signUpUser(username, password) {
  users.push({ username, password });
  console.log('User signed up successfully');
}

// Event listeners for login and sign up forms
document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  loginUser(username, password);
});

document.getElementById('signupForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  signUpUser(newUsername, newPassword);
});
