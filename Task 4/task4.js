function authenticate(){
    const validUsername="admin";
    const validPassword="12345";

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let message=document.getElementById("message");

    if(username===validUsername && password===validPassword){
        message.style.color="green";
        message.textContent="Login successfull redirectiong...";

        setTimeout(() => {
            window.location.href="task2.html";
        },2000);
    }else{
        message.style.color="red";
        message.textContent="Invalid username or password!";
    }
}