// getting reference to intereactive elements

let tmp_adults_no;
let tmp_adults_amount;
let tmp_child_no;
let tmp_child_amount;

let overall_total = 0;
let overall_adults;
let overall_adults_amount = 0;
let overall_children = 0;
let overall_kids_amount;
let overall_rooms;
let overall_room_price = 0;
let overall_bed_price = 0;

            // hotel reservation
let hr_a_date = document.getElementById("hr_a_date");
let hr_d_date = document.getElementById("hr_d_date");
let hr_adults = document.getElementById("hr_adults");
let hr_childs = document.getElementById("hr_chld");
let room_choice = document.getElementById("room_choice");
let no_of_rooms = document.getElementById("no_of_rooms");
let Facilites = document.getElementById("facilites");
let room_view = document.getElementById("room_view");
let bed = document.getElementById("bed");

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
let t_add_facilites = document.getElementById("Facilites");
let t_hr_cost = document.getElementById("hr_cost");

let t_ab_advent_out = document.getElementById("advent_out");
let t_ab_t_date = document.getElementById("t_ab_t_date");
let t_ab_sl_no_adult = document.getElementById("sladultout");
let t_ab_sl_adult_amount = document.getElementById("sladultamount");
let t_ab_sl_no_child = document.getElementById("slchildout");
let t_ab_sl_childamount = document.getElementById("slchildamount")
let t_ab_fr_no_adult = document.getElementById("fradultout");
let t_ab_fr_adult_amount = document.getElementById("fradultamount");
let t_ab_fr_no_child = document.getElementById("frchildout");
let t_ab_fr_childamount = document.getElementById("frchildamount");

let current_booking = document.getElementById("c_booking");

let t_ob_no_adults = document.getElementById("adultout");
let t_ob_adultamount = document.getElementById("adultamount");
let t_ob_no_children = document.getElementById("childout");
let t_ob_childamount = document.getElementById("childamount");
let t_ob_rooms = document.getElementById("ob_rooms");
let t_ob_room_amount = document.getElementById("ob_room_amount");

let overall_booking_amount = document.getElementById("totalamount");


// other interactive elements
let btn_ab = document.getElementById("btn_book_ad");
let btn_book_now = document.getElementById("btn_book_now");
let btn_cont_pay = document.getElementById("btn_cont_pay")
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
Facilites.addEventListener("change", updatedisplay);
bed.addEventListener("change", updatedisplay)


                //adventure booking
adeventure_type.addEventListener("change", updatedisplay);
ab_t_date.addEventListener("change", updatedisplay);
ab_sl_adults.addEventListener("change", updatedisplay);
ab_fr_adults.addEventListener("change", updatedisplay);
ab_sl_child.addEventListener("change", updatedisplay);
ab_fr_child.addEventListener("change", updatedisplay);
guide.addEventListener("change", updatedisplay);

        //other 
btn_ab.addEventListener("click", book_adventure);
btn_book_now.addEventListener("click", book_now);
btn_cont_pay.addEventListener("click", cont_to_pay);
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

    overall_rooms = overall_rooms + no_of_rooms.value;

    t_hr_roomview.innerText = room_view[room_view.selectedIndex].innerText;
    
    event.preventDefault();
    let total=0;
    let adult=0;
    let child=0;
    let room=0;
    let bed_price=0;


    //If an extra Bed is required, the necassry calculaation
    if(bed.checked)
    {
        total = total + 8000;
        bed_price = 8000;
        overall_bed_price = overall_bed_price + bed_price;
        localStorage.setItem("Additionals", "Extra Bed");
    }
    else
    {
        bed_price = 0;
    }

    //additional Facilities
    t_add_facilites.innerText = Facilites[Facilites.selectedIndex].innerText

    //calculations to be done according to the room type and extra meals for children
    if( (room_choice[room_choice.selectedIndex].value) == "Single")
    {
        total=total + ((no_of_rooms.value)*25000) + ((hr_childs.value)*5000);
        room = room + (no_of_rooms.value)*25000;
        overall_room_price = overall_room_price + room;
        child = child + (hr_childs.value)*5000;
        t_hr_cost.innerText = `${total} LKR`;
    }
    else if( (room_choice[room_choice.selectedIndex].value) == "Double")
    {
        total=total + ((no_of_rooms.value)*35000) + ((hr_childs.value)*5000);
        child = child + (hr_childs.value)*5000;
        room = room + (no_of_rooms.value)*35000;
        overall_room_price = overall_room_price + room;
        t_hr_cost.innerText = `${total} LKR`;
    }
    else if( (room_choice[room_choice.selectedIndex].value)== "Triple")
    {
        total=total + ((no_of_rooms.value)*40000) + ((hr_childs.value)*5000);
        child = child + (hr_childs.value)*5000;
        room = room + (no_of_rooms.value)*40000;
        overall_room_price = overall_room_price + room;
        t_hr_cost.innerText = `${total} LKR`;
    }
    else
    {
        total=0
        t_hr_cost.innerText = `0 LKR`;
    }

    // Text outputs (Adventure Booking)
    t_ab_advent_out.innerText = adeventure_type[adeventure_type.selectedIndex].innerText;
    t_ab_t_date.innerText = ab_t_date.value;   

    //If a guide is needed (then the calculation)
    if(guide.checked)
    {
        event.preventDefault();
        
        if(ab_sl_adults.value >= 1)
        {
            t_ab_sl_no_adult.innerText = `(${ab_sl_adults.value}) Local Adults`;
            t_ab_sl_adult_amount.innerText = `${ab_sl_adults.value*5000+1000} LKR` ;
            adult = adult + (ab_sl_adults.value*5000) + 1000;
        }
        if(ab_sl_child.value >= 1)
        {
            t_ab_sl_no_child.innerText = `(${ab_sl_child.value}) Local Child(ren)`;
            t_ab_sl_childamount.innerText = `${ab_sl_child.value*2000+500} LKR` ;
            child = child + (ab_sl_child.value*2000) + 500;
        }
        if(ab_fr_adults.value >= 1)
        {
            t_ab_fr_no_adult.innerText = `(${ab_fr_adults.value}) Local Adults`;
            t_ab_fr_adult_amount.innerText = `${ab_fr_adults.value*10000+1000} LKR` ;
            adult = adult + (ab_fr_adults.value*10000) + 1000;
        }
        if(ab_fr_child.value >= 1)
        {
            t_ab_fr_no_child.innerText = `(${ab_fr_child.value}) Local Child(ren)`;
            t_ab_fr_childamount.innerText = `${ab_fr_child.value*5000+500} LKR` ;
            child = child + (ab_fr_child.value*5000) + 500;
        }        
    }
    else
    {
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
        
    }

    //Current booking
    current_booking.innerText = `${adult + child + room + bed_price} LKR`;

    //overall booking    
    overall_adults_amount = adult;
    overall_kids_amount = child;
}

function book_now(event)
{
    if(the_form.checkValidity())
    {
        event.preventDefault();
        overall_total = overall_total + (overall_adults_amount + overall_kids_amount);

        overall_booking_amount.innerText = `${overall_total} LKR`
        t_ob_adultamount.innerText = `${overall_adults_amount} LKR`;
        t_ob_childamount.innerText = `${overall_kids_amount} LKR`;


        tmp_adults_no = tmp_adults_no + hr_adults.value;
        tmp_child_no = tmp_child_no + hr_childs.value;
        tmp_child_amount = tmp_child_amount + (hr_childs.value*5000);
        
        localStorage.setItem("Arrival Date", hr_a_date.value);
        localStorage.setItem("Departure Date", hr_d_date.value);
        localStorage.setItem("Room Type", room_choice[room_choice.selectedIndex].value);
        localStorage.setItem("Number of rooms", no_of_rooms.value);
        localStorage.setItem("Room View", room_view[room_view.selectedIndex].innerText);
        localStorage.setItem("No of adults (Hotel Reservation)", hr_adults.value);
        localStorage.setItem("No of Children (Hotel Reservation", hr_childs.value);
        localStorage.setItem("Additional Facilities", Facilites[Facilites.selectedIndex].innerText)
        localStorage.setItem("Cost of Current booking", t_hr_cost.innerText);

        hr_a_date.value = "" 
        hr_d_date.value = ""
        no_of_rooms.value = 0
        room_choice.select = "" 
        room_view.select = ""
        Facilites.select = ""
        hr_adults.value = 1
        hr_childs.value = 0
        
    }
}

function book_adventure()
{

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

function cont_to_pay(event)
{

}

