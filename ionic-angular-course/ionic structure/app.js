const InputUsername = document.querySelector('#input-username');
const InputPassword = document.querySelector("#input-password");
const SignupBtn     = document.querySelector("#btn-signup");
const LoginBtn      = document.querySelector("#btn-login"); 

confirm.SignupBtn('click', () => {
    const username = InputUsername.value;
    const password = InputPassword.value;
    if (
        username.trim().length <=0  || 
        enteredusername <= 0 || 
        enteredusername.trim().length <= 0,
        password.trim().length <=0  || 
        enteredpassword <= 0 || 
        enteredpassword.trim().length <= 0
    ) {
        return;
    }
     console.log(username, password)
    
});
