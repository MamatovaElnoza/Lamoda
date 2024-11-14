document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    var popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
})

// const button = document.querySelector('.btn');
// const account = document.querySelector('.account-info')

// button.addEventListener('click', function () {
//     account.classList.toggle('remove');
// })


const button = document.querySelector('.btn');
const text = document.querySelector('#profile-text');
const picture = document.querySelector('#profile-pic');
const newSource = 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=';
const newText = 'Sing In';

button.addEventListener('click', function () {
    picture.src = newSource;
    text.textContent = newText;
})