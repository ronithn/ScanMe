export default validationEmail(inputText)
{

    let email = inputText;
    var mailformat = /.+@1mg\.com$/;

    if(email.match(mailformat)){
        document.getElementById('emailForm').submit();
        document.getElementById("email").value = "";
        alert("Valid email address!");
    }else{
         alert("You have entered an invalid email address!");
         document.getElementById("email").focus();
    }
}