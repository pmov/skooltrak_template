
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"


// Replace with Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1XNooLgvA0lM3Vy1mHb6NExjn7JrHAjM",
    authDomain: "finaltestproj-5b51e.firebaseapp.com",
    databaseURL: "https://finaltestproj-5b51e-default-rtdb.firebaseio.com",
    projectId: "finaltestproj-5b51e",
    storageBucket: "finaltestproj-5b51e.appspot.com",
    messagingSenderId: "751545975681",
    appId: "1:751545975681:web:b0643c17bf620f66515e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
console.log("auth" + auth);
let uid = '';
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        console.log("success" + uid);
        // ...
    } else {
        // User is signed out
        // ...
    }
});


const clientForm = document.getElementById('client-form');
clientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = clientForm['email'].value;
    console.log("email :" + email);
    let password = clientForm['password'].value;
    console.log("password :" + password);
    alert(email + "   " + password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential);
            const user = userCredential.user;

            window.location.replace("./test.html");

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("************ error:" + errorMessage);
            // ..
        });
}
);

const signupBtn = document.getElementById('subtn');
signupBtn.addEventListener('click', (e) => {

    let email = document.getElementById('email').value;
    console.log("email :" + email);
    let password = document.getElementById('password').value;
    console.log("password :" + password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Account created");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("************ error:" + errorMessage);
            // ..
        });
}
);