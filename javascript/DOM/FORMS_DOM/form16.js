let formElement = document.getElementById('form-ele');
let usnInput = document.getElementById('usn');
let pwdInput = document.getElementById('pwd');
let cityInput = document.getElementById('city');
let dateInput = document.getElementById('dob');
let termsInput = document.getElementById('terms');

formElement.addEventListener('submit', function(e){

    e.preventDefault();

    let userName = usnInput.value;
    let password = pwdInput.value;
    let city = cityInput.value;
    let dob = dateInput.value;
    let gender = document.querySelector("input[name='gender']:checked").value;


    console.log(userName,password,dob,city,gender,termsInput.checked)

    formElement.reset();

})

usnInput.addEventListener('change', (e)=>{
    console.log(e.target.value);
})

usnInput.addEventListener('input', (e)=>{
    console.log(e.target.value);
})