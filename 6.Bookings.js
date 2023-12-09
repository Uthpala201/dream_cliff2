// getting references to the elements
let f_name = document.getElementById("full_name");
let mob_num = document.getElementById("mob_num");
let NIC = document.getElementById("NIC");
let e_mail = document.getElementById("e_mail");

const the_form = document.getElementById("booking_form");
let btn_cont_book = document.getElementById("button_cont");
let link = document.getElementById("link")

// Adding event listners

btn_cont_book.addEventListener("click", redirect);

function redirect(event)
{
    if (the_form.checkValidity())
    {
        event.preventDefault();
        localStorage.setItem("Full Name", f_name.value);
        localStorage.setItem("Mobile Number", mob_num.value);
        localStorage.setItem("NIC Number", NIC.value);
        localStorage.setItem("E-mail", e_mail.value);
        link.setAttribute("href", "./Hotel Reservation.html")
        btn_cont_book.style.color="green";
        link.click();
    }
    else
    {
        event.preventDefault();
        btn_cont_book.style.color="red";
        link.setAttribute("href", "");
        alert("Please fill in all required fields.");
    }
}
