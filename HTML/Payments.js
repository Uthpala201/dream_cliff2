// getting references to interactive elements 
const card_number = document.getElementById("cardNumber");
let cardNumberInput = document.getElementById('cardNumber');
let exp_date = document.getElementById("expdate");
let CVV = document.getElementById("CVV");
let crad_name = document.getElementById("crdname");
const theform = document.getElementById("form");
let pay_btn = document.getElementById("paybtn");
const link = document.getElementById("link");
let txt_promo = document.getElementById("promo_text")
let btn_promo = document.getElementById("btn_promo")

// adding event listners
window.addEventListener("load",init); 
pay_btn.addEventListener("click",display);
card_number.addEventListener('input', formatCardNumber);
card_number.addEventListener("change", display1);
exp_date.addEventListener("change",display1);
CVV.addEventListener("change",display1);
crad_name.addEventListener("change",display1);

btn_promo.addEventListener("click", discount)

//calling functions 
function init()
{
    pay_btn.innerText = `Pay (${localStorage.getItem("total to pay")} LKR)`;
    pay_btn.style.border="2px solid red";
    pay_btn.style.boxShadow = "0px 0px";
    pay_btn.style.animationDuration = "0s";
}

// format for the credit card number 
function formatCardNumber(event) 
{
    const inputValue = event.target.value.replace(/\D/g, '');
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    event.target.value = formattedValue;
}

// function to process when clicked on pay button  
function display(event)
{
    if(theform.checkValidity())
    {
        event.preventDefault();        
        localStorage.setItem("card_number", card_number.value);
        localStorage.setItem("expiry_date", exp_date.value);
        localStorage.setItem("CVV", CVV.value);
        localStorage.setItem("name_on_card", crad_name.value);

        pay_btn.style.color="green";
        pay_btn.style.border="2px solid green";
        pay_btn.style.boxShadow = "2px 2px 30px";
        pay_btn.style.animationDuration = "0s";

        link.setAttribute("href", "./Confirmation Page.html");   
        link.setAttribute("target", "_self");
        link.click();
    }    
}

// function to change the button color when all the fields are filled 
function display1()
{
    if(theform.checkValidity())
    {
        pay_btn.style.color="green";
        pay_btn.style.border="2px solid green";
        pay_btn.style.boxShadow = "2px 2px 30px";
        pay_btn.style.animationDuration = "0s";  
    }
    
}

//function to deduct 5%
function discount(event)
{

    if(theform.checkValidity())
    {
        event.preventDefault();

        let total;

        total = parseFloat(localStorage.getItem("total to pay"))
        console.log(total);
        if(txt_promo.value == "Promo123")
        {
            total = total - (total*0.05);
            console.log(total);            
            pay_btn.innerText = `Pay (${total} LKR)`
            alert("You got a 5% Discount on your Total Booking")
        }
        else
        {
            alert("Invalid Promo Code")
        }

    }
}