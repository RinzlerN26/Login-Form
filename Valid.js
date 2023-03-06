var username=document.forms['form']['username'];
var password=document.forms['form']['password'];
var username_error=document.getElementById('username_error');
var password_error=document.getElementById('password_error');
username.addEventListener('textInput',username_verify);
password.addEventListener('textInput',password_verify);
function validated()
{
    if(username.value.length<9)
    {

        username.style.border="1px solid blue";
        username_error.style.display="block";
        username.focus();
        return false;  
    }
    if(password.value.length<6)
    {

        password.style.border="1px solid blue";
        password_error.style.display="block";
        password.focus();
        return false;  
    }
}

function username_verify()
{
   if(username.value.length>=8)
   {
      username.style.border="1px solid silver";
      username_error.style.display="none";
      return true;
   }
}
function password_verify()
{
   if(password.value.length>=5)
   {
      password.style.border="1px solid silver";
      password_error.style.display="none";
      return true;
   }
}
