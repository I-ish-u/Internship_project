function resetForm() {
    document.forms["myForm"].reset();
}
function validateForm(){
    var returnval=true;

    var name=document.forms['myForm']["name"].value;
    var email=document.forms["myForm"]["email"].value;
    var country=document.forms["myForm"]["country"].value;
    var phone=document.forms["myForm"]["phone"].value;
    var password=document.forms["myForm"]["password"].value;
    var confirmpass=document.forms["myForm"]["cpassword"].value;

    if(name.length<5){
        returnval=false;
        alert("Length of Name is Too Short");
    }
    if(email.length>16){
        returnval=false;
        alert("Email Length is Too Long");
    }
    if(country.length<2){
        returnval=false;
        alert("Country Name Doesnt Exist");
    }
    if(phone.length!=10){
        alert("Enter The Correct Number");
        returnval=false;
    }
    if(password.length<8){
        alert("The Length of Password must Be of 8 Digit");
        returnval=false;
    }
    if(password!=confirmpass){
        alert("confirm password must be equal to the password");
        returnval=false;
    }
    if(returnval){
        alert("form submitted")
    }

    return returnval
}
