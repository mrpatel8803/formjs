

var nameError = document.getElementById('name_error');
var emailError = document.getElementById('e-mail_error');
var phoneError = document.getElementById('contact_error');
var birthError = document.getElementById('birth_error');
var appointmentError = document.getElementById('appointment_error');
var colorError = document.getElementById('color_error');
var patmentError = document.getElementById('payment_error');
var ageError = document.getElementById('age_error');
var cheackboxError = document.getElementById('cheackbox_error');
var photoError = document.getElementById('photo_error');
var buttonError = document.getElementById('button_error');

function validatename() {
    let name = document.getElementById("contact_name").value;
    
    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Fullname';
        return false;
    }
    nameError.innerHTML = 'valid'
    return true;
}



function validateemail(){
    let email = document.getElementById("e-mail_name").value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        
        return false;
    }

    if(!email.match(!/^[a-z0-9]@[a-z0-9]./)){
        emailError.innerHTML = 'Write Email as per Format';
        return false;
    }
    emailError.innerHTML = 'valid'
    return true;
}


function validatephone(){
    let phone = document.getElementById("contact_name").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is Required";
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digit";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "phone no is Required";
        return false;

    }

    phoneError.innerHTML = "valid";
    return true;

}

function savedata() {
    /** @note check requited condition first */

    validatename();

    let name;
    name=document.getElementById("Full_name").value;
     let firstname = localStorage.setItem("name",name)

    let email;
    email=document.getElementById("email").value;
    localStorage.setItem("email",name)

    let number;
    number=document.getElementById("number").value;
    localStorage.setItem("number",name)

    let date;
    name=document.getElementById("date").value;
    localStorage.setItem("date",name)

    let time;
    name=document.getElementById("time").value;
    localStorage.setItem("time",name)

    let selectcolor;
    name=document.getElementById("select color").value;
    localStorage.setItem("select color",name)

    let cash;
    name=document.getElementById("cash").value;
    localStorage.setItem("cash",name)

    let card;
    name=document.getElementById("card").value;
    localStorage.setItem("card",name)

    let upi;
    name=document.getElementById("upi").value;
    localStorage.setItem("upi",name)

    let age;
    name=document.getElementById("age").value;
    localStorage.setItem("age",name)

    let cheackbox;
    name=document.getElementById("cheack box").value;
    localStorage.setItem("cheack box",name)

    let file;
    name=document.getElementById("file").value;
    localStorage.setItem("file",name)
}