let confirmation = document.getElementById("Confirmation");

confirmation.innerText = `Dear ${localStorage.getItem("Full Name")} ,

Thank you for choosing our hotel for your stay. We’re delighted to confirm your reservation and are eagerly awaiting your arrival.

Your reservation details are as follows: 

Check-in Date: (${localStorage.getItem("Arrival Date")})
Check-out Date: (${localStorage.getItem("Departure Date")})
Number of Rooms: (${localStorage.getItem("Number of rooms")})
Number of Adults : (${localStorage.getItem("No of adults (Hotel Reservation)")})
Number of Kids : (${localStorage.getItem("No of Children (Hotel Reservation)")})
Additional Facilities Requested : ${localStorage.getItem("Additional Facilities")}

We’re committed to providing you with the best possible service, and we’re confident that you’ll find our facilities and our staff welcoming and accommodating.`