//your JS code here. If required.
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var phoneNumber=document.getElementById("phone-number");
var emailID=document.getElementById("email");
 
// var alertValue=` First Name:${fname.value} Last Name:${lname.value} Phone Number: ${phoneNumber.value}Email ID: ${ emailID.value} ` ;

function alertTable(){
    alert("First Name: "+ fname.value+ " Last Name: "+ lname.value+" Phone Number: "+phoneNumber.value+ " Email ID: "+emailID.value);
}