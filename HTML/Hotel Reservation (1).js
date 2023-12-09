// getting reference to intereactive elements
let overall_total;
let overall_adults;
let overall_children;
let overall_rooms;

            // hotel reservation
let hr_a_date = document.getElementById("hr_a_date");
let hr_d_date = document.getElementById("hr_d_date");
let hr_adults = document.getElementById("hr_adults");
let hr_childs = document.getElementById("hr_chld");
let room_choice = document.getElementById("room_choice");
let no_of_rooms = document.getElementById("no_of_rooms");

let wifi = document.getElementById("wifi");
let AC = document.getElementById("AC");

let room_view = document.getElementById("room_view");

            //Adventure Booking 
let adeventure_type = document.getElementById("adventure_type");
let ab_t_date = document.getElementById("ab_T_date");

let ab_sl_adults = document.getElementById("ab_sl_adults");
let ab_fr_adults = document.getElementById("ab_fr_adults");
let ab_sl_child = document.getElementById("ab_sl_child");
let ab_fr_child = document.getElementById("ab_fr_child");

let guide = document.getElementById("guide");

            // Table elements
let t_a_date_out = document.getElementById("A_date");
let t_d_date_out = document.getElementById("D_date");
let t_hr_adult_out = document.getElementById("adultout");
let t_hr_child_out = document.getElementById("childout");
let t_hr_roomview = document.getElementById("room_view_out");
let t_hr_roomtype = document.getElementById("room_type");
let t_no_rooms = document.getElementById("no_room_out");
let t_hr_cost = document.getElementById("hr_cost");

let t_ab_advent_out = document.getElementById("advent_out");

let t_ab_sl_no_adult = document.getElementById("sladultout");
let t_ab_sl_adult_amount = document.getElementById("sladultamount");
let t_ab_sl_no_child = document.getElementById("slchildout");
let t_ab_sl_childamount = document.getElementById("slchildamount")
let t_ab_fr_no_adult = document.getElementById("fradultout");
let t_ab_fr_adult_amount = document.getElementById("fradultamount");
let t_ab_fr_no_child = document.getElementById("frchildout");
let t_ab_fr_childamount = document.getElementById("frchildamount");

let current_booking = document.getElementById("c_booking");

let ob_no_adults = document.getElementById("adultout");
let ob_adultamount = document.getElementById("adultamount");
let ob_no_children = document.getElementById("childout");
let ob_childamount = document.getElementById("childamount");
let ob_rooms = document.getElementById("ob_rooms");
let ob_room_amount = document.getElementById("ob_room_amount");

let overall_booking_amount = document.getElementById("totalamount");


// other interactive elements
let btn_ab = document.getElementById("btn_book_ad");
let btn_book_now = document.getElementById("btn_book_now");
let btn_ad_fav = document.getElementById("btn_fav");
let link = document.getElementById("link");

const the_form = document.getElementById("the_form")

// Adding event Listeners

        //to change while the options are being choosen and entered

                //hotel reservation
hr_a_date.addEventListener("change", updatedisplay); 
hr_d_date.addEventListener("change", updatedisplay); 
hr_adults.addEventListener("change", updatedisplay); 
hr_childs.addEventListener("change", updatedisplay); 
room_choice.addEventListener("change", updatedisplay); 
no_of_rooms.addEventListener("change", updatedisplay); 
room_view.addEventListener("change", updatedisplay);

                //adventure booking
adeventure_type.addEventListener("change", updatedisplay);
ab_t_date.addEventListener("change", updatedisplay);
ab_sl_adults.addEventListener("change", updatedisplay);
ab_fr_adults.addEventListener("change", updatedisplay);
ab_sl_child.addEventListener("change", updatedisplay);
ab_fr_child.addEventListener("change", updatedisplay);
guide.addEventListener("change", guidecal);

        //other 
btn_ab.addEventListener("click", book_adventure);
btn_book_now.addEventListener("click", book_now);
btn_ad_fav.addEventListener("click", add_to_fav);

// calling out function

function updatedisplay(event)
{
    // Text outputs (Hotel Reservation)
    t_a_date_out.innerText = hr_a_date.value;
    t_d_date_out.innerText = hr_d_date.value;

    t_hr_adult_out.innerText = hr_adults.value;
    t_hr_child_out.innerText = hr_childs.value;
    t_hr_roomtype.innerText = room_choice[room_choice.selectedIndex].value;
    t_no_rooms.innerText = no_of_rooms.value;
    t_hr_roomview.innerText = room_view[room_view.selectedIndex].innerText;
    
    event.preventDefault();
    let total=0;
    let adult=0;
    let child=0;
    let room=0;

    if( (room_choice[room_choice.selectedIndex].value) == "Single")
    {
        total=total + ((no_of_rooms.value)*25000) + ((hr_childs.value)*5000);
        room = room + (no_of_rooms.value)*25000;
        child = child + (hr_childs.value)*5000;
        t_hr_cost.innerText = `${total} LKR`;
    }
    else if( (room_choice[room_choice.selectedIndex].value) == "Double")
    {
        total=total + ((no_of_rooms.value)*35000) + ((hr_childs.value)*5000);
        child = child + (hr_childs.value)*5000;
        room = room + (no_of_rooms.value)*35000;
        t_hr_cost.innerText = `${total} LKR`;
    }
    else if( (room_choice[room_choice.selectedIndex].value)== "Triple")
    {
        total=total + ((no_of_rooms.value)*40000) + ((hr_childs.value)*5000);
        child = child + (hr_childs.value)*5000;
        room = room + (no_of_rooms.value)*40000;
        t_hr_cost.innerText = `${total} LKR`;
    }
    else
    {
        total=0
        t_hr_cost.innerText = `0 LKR`;
    }

    // Text outputs (Adventure Booking)
    t_ab_advent_out.innerText = adeventure_type[adeventure_type.selectedIndex].innerText;

    t_ab_sl_no_adult.innerText = `(${ab_sl_adults.value}) Local Adults`;
    t_ab_sl_adult_amount.innerText = `${ab_sl_adults.value*5000} LKR` ;
    adult = adult + (ab_sl_adults.value*5000);

    t_ab_sl_no_child.innerText = `(${ab_sl_child.value}) Local Child(ren)`;
    t_ab_sl_childamount.innerText = `${ab_sl_child.value*2000} LKR` ;
    child = child + (ab_sl_child.value*2000);

    t_ab_fr_no_adult.innerText = `(${ab_fr_adults.value}) Local Adults`;
    t_ab_fr_adult_amount.innerText = `${ab_fr_adults.value*10000} LKR` ;
    adult = adult + (ab_fr_adults.value*10000);

    t_ab_fr_no_child.innerText = `(${ab_fr_child.value}) Local Child(ren)`;
    t_ab_fr_childamount.innerText = `${ab_fr_child.value*5000} LKR` ;
    child = child + (ab_fr_child.value*5000);

    //Text output (Current Booking)
    current_booking.innerText = `${adult + child + room} LKR`;

    //Text output ( Overall Booking)
    ob_adultamount.innerText ;
    ob_childamount.innerText ;
}

function guidecal(event)
{
    if(this.checked)
    {
        event.preventDefault();
        
        t_ab_sl_no_adult.innerText = `(${ab_sl_adults.value}) Local Adults`;
        t_ab_sl_adult_amount.innerText = `${ab_sl_adults.value*5000+1000} LKR` ;
        t_ab_sl_no_child.innerText = `(${ab_sl_child.value}) Local Child(ren)`;
        t_ab_sl_childamount.innerText = `${ab_sl_child.value*2000+500} LKR` ;

        t_ab_fr_no_adult.innerText = `(${ab_fr_adults.value}) Local Adults`;
        t_ab_fr_adult_amount.innerText = `${ab_fr_adults.value*10000+1000} LKR` ;
        t_ab_fr_no_child.innerText = `(${ab_fr_child.value}) Local Child(ren)`;
        t_ab_fr_childamount.innerText = `${ab_fr_child.value*5000+500} LKR` ;
    }
    else
    {
        t_ab_sl_no_adult.innerText = `(${ab_sl_adults.value}) Local Adults`;
        t_ab_sl_adult_amount.innerText = `${ab_sl_adults.value*5000} LKR` ;
        t_ab_sl_no_child.innerText = `(${ab_sl_child.value}) Local Child(ren)`;
        t_ab_sl_childamount.innerText = `${ab_sl_child.value*2000} LKR` ;

        t_ab_fr_no_adult.innerText = `(${ab_fr_adults.value}) Local Adults`;
        t_ab_fr_adult_amount.innerText = `${ab_fr_adults.value*10000} LKR` ;
        t_ab_fr_no_child.innerText = `(${ab_fr_child.value}) Local Child(ren)`;
        t_ab_fr_childamount.innerText = `${ab_fr_child.value*5000} LKR` ;
    }
}

function book_now(event)
{
    if(the_form.checkValidity())
    {
        event.preventDefault();

    }
}

function add_to_fav(event)
{
    if(the_form.checkValidity())
    {
        event.preventDefault();

        localStorage.setItem("Arrival Date", hr_a_date.value);
        localStorage.setItem("Departure Date", hr_d_date.value);
        localStorage.setItem("Adults")
    }
}