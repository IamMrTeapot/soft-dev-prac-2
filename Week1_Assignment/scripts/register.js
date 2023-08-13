const validateEmpty = () => {
    const companyElement = document.forms["registration-form"]["company"];
    const contactNameElement = document.forms["registration-form"]["contact-name"];
    const contactInfoElement = document.forms["registration-form"]["contact-info"];

    if (companyElement.value == ""){
        alert("Company name must be filled out");
        return;
    }

    if (contactNameElement.value == ""){
        alert("Contact name must be filled out");
        return;
    }

    if (contactInfoElement.value == "")
        alert("Contact info must be filled out");

}

const validateDropdown = () => {
    const boothSizeElement = document.forms["registration-form"]["booth-size"];

    if (boothSizeElement.value == "")
        alert("Booth size must be selected");

}

const validateChair = () => {
    const chairAmountElement = document.forms["registration-form"]["chair-amount"];
    if(chairAmountElement.value == "")
        return;

    if(chairAmountElement.value < 1 || chairAmountElement.value > 10)
        alert("Chair amount must be between 1 and 10");
    
}

const validateAll = () => {
    validateEmpty();
    validateDropdown();
    validateChair();
}