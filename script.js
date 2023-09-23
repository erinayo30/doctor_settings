// Dark mode
function onclick(){
    let element= document.body;
    element.classList.toggle(onclick);
}
// local storage

// To Add data to the local Storage
function update(e){
    e.preventDefault();

    let userId = document.getElementById("userId").value
    let licenseNumber = document.getElementById("licenseNumber").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let speciality = document.getElementById("speciality").value
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let otherName = document.getElementById("otherName").value
    let email = document.getElementById("email").value
    

    let person= {
        firstName: firstName,
        lastName :lastName,
        otherName : otherName,
        email:email,
        phoneNumber:phoneNumber,
        licenseNumber: licenseNumber,
        userId:userId,
        speciality: speciality
    }
    localStorage.setItem("person",JSON.stringify(person))
}
