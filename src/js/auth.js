// login.js

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password using Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            console.log('Successfully logged in');
            window.location.href = 'teacher_portal.html'; // Redirect to teacher portal page
        })
        .catch((error) => {
            // Failed login
            console.error('Login failed', error.message);
        });
});

function logout() {
    firebase.auth().signOut().then(() => {
        console.log('Successfully logged out');
        // Redirect to the login page after logout
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Logout failed', error.message);
    });
}




/* alternate method
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect or show the teacher portal page
            console.log('Successfully logged in', userCredential.user);
        })
        .catch((error) => {
            console.error('Login failed', error.message);
        });
});

*/
