// work experience button
function addWorkEx(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("form-control-lg");
    newNode.classList.add("workExField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
// education qualification button
function addEducationQul(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("form-control-lg");
    newNode.classList.add("eduQuaField");
    newNode.classList.add("mt-3");

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode, eqAddButtonOb);
}

// generating resume

function generateResume(){
    // for name
    let nameField = document.getElementById("nameField").value;
    let nameTemplate1 = document.getElementById("nameTemplate1");
    let nameTemplate2 = document.getElementById("nameTemplate2");
    nameTemplate1.innerHTML = nameField;
    nameTemplate2.innerHTML = nameField;
    // for phone number
    let numberField = document.getElementById("numberField").value;
    let contactTemplate = document.getElementById("contactTemplate");
    contactTemplate.innerHTML = numberField;
    // for address
    let addressField = document.getElementById("addressField").value;
    let addressTemplate = document.getElementById("addressTemplate");
    addressTemplate.innerHTML = addressField;
    // for facebook
    let facebookField = document.getElementById("facebookField").value;
    let facebookTemplate = document.getElementById("facebookTemplate");
    facebookTemplate.innerHTML = facebookField;
    // for linkedin
    let linkedinField = document.getElementById("linkedinField").value;
    let linkTemplate = document.getElementById("linkTemplate");
    linkTemplate.innerHTML = linkedinField;
    // for naukri
    let naukrikField = document.getElementById("naukrikField").value;
    let naukriTemplate = document.getElementById("naukriTemplate");
    naukriTemplate.innerHTML = naukrikField;
    // for objective
    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveTemplate = document.getElementById("objectiveTemplate");
    objectiveTemplate.innerHTML = objectiveField;
    // for work experience
    let workExField = document.getElementsByClassName("workExField");
    let experienceTemplate = document.getElementById("experienceTemplate");
    let str = '';
    for(let e of workExField){
        str = str+`<li>${e.value}</li>`;
    }
    experienceTemplate.innerHTML = str;
    // for education qualification
    let eduQuaField = document.getElementsByClassName("eduQuaField");
    let qualificationTemplate = document.getElementById("qualificationTemplate");
    let string = '';
    for(let e of eduQuaField){
        string = string+`<li>${e.value}</li>`;
    }
    qualificationTemplate.innerHTML = string;
    // code for setting image
    let file = document.getElementById("fileField").files[0];
    console.log("file");
    let reder = new FileReader();
    reder.readAsDataURL(file);
    console.log(reder.result);
    reder.onload = function(){
        document.getElementById("imgTemplate").src = reder.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cvTemplate").style.display= "block";
}

// name validation
function onlyAlpha(){
    let charCode = event.keyCode;
    if((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
        return true;
    } else{
        return false;
    }
}

function onlyNumber(evt){
    let f = window.event || evt;
    let charCode = f.which || f.keyCode;
    if(charCode < 48 || charCode > 57){
        if(window.event)
        window.event.returnValue = false;
        else f.preventDefault();
    }
    return true;
}