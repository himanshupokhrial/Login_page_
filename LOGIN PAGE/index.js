var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");


var details = JSON.parse(localStorage.getItem("details"));
if(details){
    nameInput.value = details.name;
    emailInput.value = details.email;
    passwordInput.value = details.password;

}


document.getElementById("form")
document.addEventListener("submit", function(event){
    event.preventDefault();



    
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    console.log("name", name);
    console.log("email", email);
    console.log("Password", password);

    if(!name || !email || !password){
        return;
    }
    
    // let myobj = JSON.stringify(saveData);

    var details = {
        name : name,
        email: email,
        password : password
    };

    localStorage.setItem("details", JSON.stringify(details));

    

    // localStorage.setItem("name",username);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",Password);
    // console.log(localStorage);

})