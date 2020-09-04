
//validate the credentials that where entered into the form against an array and see if the credentials match
 //create array and enter credentials - 
 var credentials = [
	{
		username: "Sally123",
		password: "Abcd",
		email: "123Sally@gmail.com" 
	},
	{
		username: "MadMax",
		password: "1234",
		email: "hesmad@hotmail.com"
	},
	{
		username: "Pietro",
		password: "lovesArt",
		email: "Pietro@email.com"
	},
	{
		username: "Kristina",
		password: "password",
		email: "Kristina@email.com"
	}
	]

 // get input from HTML and save input as a variable
var loginForm = document.querySelector("#login-form");
var loginErrorMsg = document.querySelector("#login-error-msg")
var loginButton = document.querySelector("#login-form-submit");

//event listener for button
loginButton.addEventListener("click", (e) => {
//preventing the default behavior of clicking the login button , we dont
//want to submit the data only validate them
	e.preventDefault();
	var username = loginForm.username.value;
	var password = loginForm.password.value;

for (var i = 0; i <= credentials.length - 1; i++) {
	//looping over the array to see if credentials(username and password) are in the array
	if (credentials[i].username === username && credentials[i].password === password) {
		alert("Your have successfully loged in.");
		location.reload();
	}
	else {
		loginErrorMsg.style.opacity = 1;
	}
}
})