// catch the button 
let login = document.querySelector(".login")
let signup = document.querySelector(".signup")


// To redirect to the other landing page once user clicked on login button
login.addEventListener("click", function(){
    window.location.href = "./loginPage.html"
})

// To redirect to the other landing page of registeration, once user clicked on signup button
signup.addEventListener("click", function(){
    window.location.href = "./signupPage.html"
})


