// JS FOR CONTACT PAGE


// burger 
burger.addEventListener("click",()=>{
    head.classList.toggle('h-nav');
    navbar.classList.toggle('v-class');
    social.classList.toggle('v-class');
});


// form (number and age)  validation

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    number=phone.value;
    a=age.value;
    
    if(a>=100){
        alert("Please enter a valid age");
    }

    else if (number.length<10) {
        alert("Please enter a valid mobile number");
    }

    else if (number.length>10) {
        alert("Please enter a valid mobile number");
    }
    
    else if ((number[0]!=9) && (number[0]!=8) && (number[0]!=7) && (number[0]!=6)){
        alert("Please enter a valid mobile number");
    }
    else{
        let result=confirm("Do you really want to submit the form?")
        if (result == true) {
            form.submit();
            form.reset();
            alert("Your form was submitted successfully!!!")
        }
    }
    
});