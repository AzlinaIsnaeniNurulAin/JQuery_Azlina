const navbarnav = document.querySelector ('.nav');
document.querySelector('#menu-icon').
onclick = () => {
    navbarnav.classList.toggle('active');
};

const hamburger = document.querySelector ('#menu-icon');
document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});


//* JQuery

$(document).ready(function() {
    $('.send').on('click', function(event) {
        var nama = $('#nama').val();
        var email = $('#email').val();
        var number = $('#number').val();
        var message = $('#message').val();
        var valid = true;

        if (nama.trim() === '') {
            alert('Nama wajib diisi.');
            valid = false;
        } else if (!nama.match(/^[A-Za-z\s]+$/)) {
            alert('Nama tidak boleh mengandung angka atau karakter khusus.');
            valid = false;
        }
        if (email.trim() === '') {
            alert('Email wajib diisi');
            valid = false;
        } else if (!isValidEmail(email)) {
            alert('Format email tidak sesuai.');
            valid = false;
        }
        if (number.trim() === '') {
            alert('Nomor telepon wajib diisi');
            valid = false;
        } else if (!number.match(/^\d{10,13}$/)) {
            alert('Nomor telepon harus terdiri dari 10 hingga 13 digit angka.');
            valid = false;
        }
        if (message.trim() === '') {
            alert('Pesan wajib diisi');
            valid = false;
        }
        if (!valid) {
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }
});