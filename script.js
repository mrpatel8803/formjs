

var nameError = document.getElementById('name_error');
var emailError = document.getElementById('e-mail_error');
var phoneError = document.getElementById('contact_error');
var birthError = document.getElementById('birth_error');
var appointmentError = document.getElementById('appointment_error');
var colorError = document.getElementById('color_error');
var paymentError = document.getElementById('payment_error');
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
    let e = document.getElementById("e-mail_name");
    
    if(e.value == ""){
        emailError.innerHTML = 'Email is Required';
        return false;
    }

    if(!e.match(!/^[a-z0-9]@[a-z0-9]./)){
        emailError.innerHTML = 'Write Email as per Format';
        return false;
    }
    emailError.innerHTML = 'valid'
    return true;
}


function validatephone(){
    let Phone = document.getElementById("contact_name").value;

    if(Phone.length == 0){
        phoneError.innerHTML = "Phone no is Required";
        return false;
    }

    if(Phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digit";
        return false;
    }

    if(!Phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "phone no is Required";
        return false;

    }

    phoneError.innerHTML = "valid";
    return true;

}

function validatebirth(){
    let Birthdate = document.getElementById("date").value;

    if (!Birthdate.selector){
        birthError.innerHTML = "Birth date selection is Required";
        return false;
    }

    birthError.innerHTML = "valid";
    return true;
}

function validateappointment(){
    let AppointmentTime = document.getElementById("time").value;

    if(!AppointmentTime.selector){
        appointmentError.innerHTML = "Appointment Selection is Required";
        return false;
    }

    appointmentError.innerHTML = "valid";
    return true;
}

function validatecolor(){
    let Favouritecolor = document.getElementById("select_Color").value;

    if(!Favouritecolor.selector){
        colorError.innerHTML = "Color selection is Required";
        return false;
    }

    colorError.innerHTML = "valid";
    return true;
}

function validatepayment(){
    let Payment = document.getElementById("Payment").value;

    if(!Payment.selector){
        paymentError.innerHTML = "Payment selection is Required";
        return false;

    }

    paymentError.innerHTML = "valid";
    return true;
}

function validateage(){
    let Age = document.getElementById("range").value;

    if(!Age.selector){
        ageError.innerHTML = "Age selection is Required";
        return false;
    }

    ageError.innerHTML = "valid";
    return true;
}

function validateCheackbox(){
    let Cheackbox = document.getElementById("heackbox");

    if(!Cheackbox.selector){
        cheackboxError.innerHTML = "Cheackbox selection is Required";
        return false;
    }

    cheackboxError.innerHTML = "valid";
    return true;
}

function validatePhoto(){
    let Photo = document.getElementById("file");

    if(!Photo.upload){
        photoError.innerHTML = "Image uplodation is Required";
        return false;
    }

    photeError.innerHTML = "valid";
    return true;
}






//    main part of js
function savedata() {
    /** @note check requited condition first */
    console.log("fire");
    validatename();
    validateemail();
    validatephone();
    validatebirth();
    validateappointment();
    validatecolor();
    validatepayment();
    validateage();
    validatecheackbox();
    validatephoto();

    let name;
    name=document.getElementById("Full_name").value;
     let Fullname = localStorage.setItem("name",name)

    let email;
    email=document.getElementById("email").value;
   let E_mail = localStorage.setItem("email",name)

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