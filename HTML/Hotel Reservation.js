// getting reference to intereactive elements

    //Hotel reservation Temprary variables
let tmp_adults_no = 0;
let tmp_child_no = 0;
let tmp_child_amount = 0;
let tmp_bed_price = 0;
let tmp_room_price = 0;
let tmp_hr_cost = 0

    //Adventure Booking variables
let ab_tmp_adults_no = 0;
let ab_tmp_adults_amount = 0;
let ab_tmp_child_no = 0;
let ab_tmp_child_amount = 0;
let tmp_ab_cost = 0

    //overall values variables
let overall_total = 0;
let overall_adults = 0;
let overall_adults_amount = 0;
let overall_children = 0;
let overall_kids_amount = 0;
let overall_rooms = 0;
let overall_room_price = 0;
let overall_bed_price = 0;
let loyality_points = 0;
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
//___________________________________________________________________
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
let t_ab_current_cost = document.getElementById("ab_current_cost");
//___________________________________________________________________
let current_booking = document.getElementById("c_booking");
//___________________________________________________________________
let t_ob_no_adults = document.getElementById("adultout");
let t_ob_adultamount = document.getElementById("adultamount");
let t_ob_no_children = document.getElementById("childout");
let t_ob_childamount = document.getElementById("childamount");
let t_ob_rooms = document.getElementById("ob_rooms");
let t_ob_room_amount = document.getElementById("ob_room_amount");
//___________________________________________________________________
let overall_booking_amount = document.getElementById("totalamount");


// other interactive elements
const btn_ab = document.getElementById("btn_book_advt");
let btn_book_now = document.getElementById("btn_book_now");
let btn_cont_pay = document.getElementById("btn_cont_pay")
let btn_ad_fav = document.getElementById("btn_fav");
let btn_lylty = document.getElementById("lylty");
let link = document.getElementById("link");

const the_form = document.getElementById("the_form")
const adventure_form = document.getElementById("adventure_form")

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
adeventure_type.addEventListener("change", updatedisplay1);
ab_t_date.addEventListener("change", updatedisplay1);
ab_sl_adults.addEventListener("change", updatedisplay1);
ab_fr_adults.addEventListener("change", updatedisplay1);
ab_sl_child.addEventListener("change", updatedisplay1);
ab_fr_child.addEventListener("change", updatedisplay1);
guide.addEventListener("change", updatedisplay1);

        //other 
btn_ab.addEventListener("click", book_adventure);
btn_book_now.addEventListener("click", book_now);
btn_cont_pay.addEventListener("click", cont_to_pay);
btn_ad_fav.addEventListener("click", add_to_fav);
btn_lylty.addEventListener("click", loyality)

// calling out function

//hotel reservation
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
    let child=0;
    let room=0;
    let bed_price=0;

    //If an extra Bed is required, the necassry calculaation
    if(bed.checked)
    {
        total = total + 8000;
        bed_price = 8000;
        localStorage.setItem("Additionals", "Extra Bed");

        //calculations to be done according to the room type and extra meals for children
        if( (room_choice[room_choice.selectedIndex].value) == "Single")
        {
            total=total + ((no_of_rooms.value)*25000) + ((hr_childs.value)*5000);
            room = (no_of_rooms.value)*25000;
            child = (hr_childs.value)*5000;
            t_hr_cost.innerText = `${total} LKR`;
        }
        else if( (room_choice[room_choice.selectedIndex].value) == "Double")
        {
            total=((no_of_rooms.value)*35000) + ((hr_childs.value)*5000);
            child = (hr_childs.value)*5000;
            room = (no_of_rooms.value)*35000;
            t_hr_cost.innerText = `${total} LKR`;
        }
        else if( (room_choice[room_choice.selectedIndex].value)== "Triple")
        {
            total=total + ((no_of_rooms.value)*40000) + ((hr_childs.value)*5000);
            child = (hr_childs.value)*5000;
            room = (no_of_rooms.value)*40000;
            t_hr_cost.innerText = `${total} LKR`;
        }
        else
        {
            total=0
            t_hr_cost.innerText = `0 LKR`;
        }
    }
    else
    {
        bed_price = 0;
        //calculations to be done according to the room type and extra meals for children
        if( (room_choice[room_choice.selectedIndex].value) == "Single")
        {
            total=total + ((no_of_rooms.value)*25000) + ((hr_childs.value)*5000);
            room = (no_of_rooms.value)*25000;
            child = (hr_childs.value)*5000;
            t_hr_cost.innerText = `${total} LKR`;
        }
        else if( (room_choice[room_choice.selectedIndex].value) == "Double")
        {
            total=((no_of_rooms.value)*35000) + ((hr_childs.value)*5000);
            child = (hr_childs.value)*5000;
            room = (no_of_rooms.value)*35000;
            t_hr_cost.innerText = `${total} LKR`;
        }
        else if( (room_choice[room_choice.selectedIndex].value)== "Triple")
        {
            total=total + ((no_of_rooms.value)*40000) + ((hr_childs.value)*5000);
            child = (hr_childs.value)*5000;
            room = (no_of_rooms.value)*40000;
            t_hr_cost.innerText = `${total} LKR`;
        }
        else
        {
            total=0
            t_hr_cost.innerText = `0 LKR`;
        }
    }
    //additional Facilities
    t_add_facilites.innerText = Facilites[Facilites.selectedIndex].innerText

    
    //overall booking variables and asignings
    tmp_room_price = room;
    tmp_bed_price = bed_price;
    tmp_child_amount = child;

    tmp_adults_no = parseInt(hr_adults.value);
    tmp_child_no = parseInt(hr_childs.value);

     //Current booking
    tmp_hr_cost = (tmp_child_amount + tmp_bed_price + tmp_room_price)

    current_booking.innerText = `${tmp_hr_cost + tmp_ab_cost} LKR`

    localStorage.setItem("Current Cost(Hotel Reservation)", tmp_hr_cost);
}

//adventure booking
function updatedisplay1(event)
{
    let adult=0;
    let child=0;
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
            t_ab_fr_no_adult.innerText = `(${ab_fr_adults.value}) Foreign Adults`;
            t_ab_fr_adult_amount.innerText = `${ab_fr_adults.value*10000+1000} LKR` ;
            adult = adult + (ab_fr_adults.value*10000) + 1000;
        }
        if(ab_fr_child.value >= 1)
        {
            t_ab_fr_no_child.innerText = `(${ab_fr_child.value}) Foreign Child(ren)`;
            t_ab_fr_childamount.innerText = `${ab_fr_child.value*5000+500} LKR` ;
            child = child + (ab_fr_child.value*5000) + 500;
        }
        
        localStorage.setItem("Guide For adventure", "Guide Booked")
        
    }
    else
    {
        t_ab_sl_no_adult.innerText = `(${ab_sl_adults.value}) Local Adults`;
        t_ab_sl_adult_amount.innerText = `${ab_sl_adults.value*5000} LKR` ;
        adult = adult + (ab_sl_adults.value*5000);
        
        t_ab_sl_no_child.innerText = `(${ab_sl_child.value}) Local Kid(s)`;
        t_ab_sl_childamount.innerText = `${ab_sl_child.value*2000} LKR` ;
        child = child + (ab_sl_child.value*2000);
        
        t_ab_fr_no_adult.innerText = `(${ab_fr_adults.value}) Foreign Adults`;
        t_ab_fr_adult_amount.innerText = `${ab_fr_adults.value*10000} LKR` ;
        adult = adult + (ab_fr_adults.value*10000);
        
        t_ab_fr_no_child.innerText = `(${ab_fr_child.value}) Foreign Kid(s)`;
        t_ab_fr_childamount.innerText = `${ab_fr_child.value*5000} LKR` ;
        child = child + (ab_fr_child.value*5000);
        
    }

    //overall booking
    ab_tmp_adults_amount = adult
    ab_tmp_adults_no = parseInt(ab_fr_adults.value) + parseInt(ab_sl_adults.value)

    ab_tmp_child_amount = child
    ab_tmp_child_no = parseInt(ab_sl_child.value) + parseInt(ab_fr_child.value)
    
    //Current booking
    tmp_ab_cost = (ab_tmp_adults_amount + ab_tmp_child_amount)
    t_ab_current_cost.innerText = `${tmp_ab_cost} LKR`

    current_booking.innerText = `${tmp_ab_cost + tmp_hr_cost} LKR`;
    localStorage.setItem("Current Cost(Adventure Booking)", tmp_ab_cost)
        
}

//Hotel Booking Button
function book_now(event)
{
    if(the_form.checkValidity() && (confirm("Do you Wish to Confirm the booking?") == true))
    {
        event.preventDefault();        

        overall_total = overall_total + tmp_hr_cost
        overall_booking_amount.innerText = `${overall_total} LKR`;

        overall_rooms = overall_rooms + parseInt(no_of_rooms.value);
        overall_room_price = overall_room_price + tmp_room_price;        
        
        overall_adults = parseInt(overall_adults) + tmp_adults_no 
        localStorage.setItem("Overall Adults", overall_adults)
        t_ob_no_adults.innerText = `${overall_adults} Adult(s)`

        overall_children = parseInt(overall_children) + tmp_child_no ;
        localStorage.setItem("Overall Children", overall_children)
        t_ob_no_children.innerText = `${overall_children} Kid(s)`

        overall_kids_amount = overall_kids_amount + tmp_child_amount;
        t_ob_childamount.innerText = `${overall_kids_amount} LKR`;

        t_ob_rooms.innerText = `${overall_rooms} Room(s)`;
        t_ob_room_amount.innerText = `${overall_room_price} LKR`;

        loyality_points = loyality_points + 10;

        //_loading items to local storage_
        localStorage.setItem("Arrival Date", hr_a_date.value);
        localStorage.setItem("Departure Date", hr_d_date.value);
        localStorage.setItem("Room Type", room_choice[room_choice.selectedIndex].value);
        localStorage.setItem("Number of rooms", no_of_rooms.value);
        localStorage.setItem("Room View", room_view[room_view.selectedIndex].innerText);
        localStorage.setItem("No of adults (Hotel Reservation)", hr_adults.value);
        localStorage.setItem("No of Children (Hotel Reservation)", hr_childs.value);
        localStorage.setItem("Additional Facilities", Facilites[Facilites.selectedIndex].innerText)
        localStorage.setItem("Cost of Current booking", t_hr_cost.innerText);
        localStorage.setItem("total to pay", overall_total);

        //resetting values
        hr_a_date.value = "" 
        hr_d_date.value = ""
        no_of_rooms.value = ""
        hr_adults.value = ""
        hr_childs.value = ""

        //reseting table
        t_a_date_out.innerText = "Select Date"
        t_d_date_out.innerText = "Select Date"
        t_hr_adult_out.innerText = ""
        t_hr_child_out.innerText = ""
        t_hr_roomtype.innerText = "Select Room Type"
        t_hr_roomview.innerText = "Select Room view"
        t_no_rooms.innerText = ""
        t_add_facilites.innerText = ""
        t_hr_cost.innerText = ""

        console.log("Hotel Reserved")
        alert("Hotel Booking Successful")
    }
    
}

//Adventure Booking Button
function book_adventure(event) 
{
    if (adventure_form.checkValidity() && (confirm("Do you Wish to Confirm the booking?") == true) ) 
    {
        event.preventDefault();        

        overall_adults = parseInt(overall_adults) + ab_tmp_adults_no
        localStorage.setItem("Overall Adults", overall_adults)
        t_ob_no_adults.innerText = `${overall_adults} Adult(s)`

        overall_children = parseInt(overall_children) + ab_tmp_child_no;
        localStorage.setItem("Overall Children", overall_children)
        t_ob_no_children.innerText = `${overall_children} Kid(s)`

        overall_adults_amount = overall_adults_amount + ab_tmp_adults_amount;
        t_ob_adultamount.innerText = `${overall_adults_amount} LKR`;

        overall_kids_amount = overall_kids_amount + ab_tmp_child_amount;
        t_ob_childamount.innerText = `${overall_kids_amount} LKR`

        overall_total = overall_total + tmp_ab_cost;
        overall_booking_amount.innerText = `${overall_total} LKR`;

        loyality_points = loyality_points + 10;

        //_loading items to local storage_        
        localStorage.setItem("total to pay", overall_total);
        localStorage.setItem("Adventure Type", adeventure_type[adeventure_type.selectedIndex].value);
        localStorage.setItem("Adventure Travel Date", ab_t_date.value);
        localStorage.setItem("No. Local Adults (Adventure Booking)", ab_sl_adults.value);
        localStorage.setItem("No. Foreign Adults (Adventure Booking)", ab_fr_adults.value);
        localStorage.setItem("No. Local Kids (Adventure Booking)", ab_sl_child.value);
        localStorage.setItem("No. Foregin Kids (Adventure Booking)", ab_fr_child.value);
        localStorage.setItem("total to pay", overall_total);

        alert(`Adventure Booking Successful.
        
        
                Booked Adventure = ${adeventure_type[adeventure_type.selectedIndex].value}`)

        // Clear or reset specific fields after booking
        ab_fr_adults.value = "";
        ab_fr_child.value = "";
        ab_sl_adults.value = "";
        ab_sl_child.value = "";
        ab_t_date.value = "";

        //resetting table
        t_ab_advent_out.innerText = "Select Adventure Type"
        t_ab_t_date.innerText = "Select Adventure Date"

        t_ab_sl_no_adult.innerText = "Local Adults"
        t_ab_sl_adult_amount.innerText = ""
        t_ab_sl_no_child.innerText = "Local Kids"
        t_ab_sl_childamount.innerText = ""

        t_ab_fr_no_adult.innerText = "Foreign Adults"
        t_ab_fr_adult_amount.innerText = ""
        t_ab_fr_no_child.innerText = "Foreign Kids"
        t_ab_fr_childamount.innerText = ""

        t_ab_current_cost.innerText = ""

        console.log("adventure Booked");
        
    }
}

//Add to Favourite Button
function add_to_fav(event)
{
    if(parseInt(overall_total) > 5000)
    {
        event.preventDefault();

        //Hotel Reservation Fav
        localStorage.setItem("Arrival Date", hr_a_date.value);
        localStorage.setItem("Departure Date", hr_d_date.value);
        localStorage.setItem("Room Type", room_choice[room_choice.selectedIndex].value);
        localStorage.setItem("Number of rooms", no_of_rooms.value);
        localStorage.setItem("Room View", room_view[room_view.selectedIndex].innerText);
        localStorage.setItem("No of adults (Hotel Reservation)", hr_adults.value);
        localStorage.setItem("No of Children (Hotel Reservation)", hr_childs.value);
        localStorage.setItem("Additional Facilities", Facilites[Facilites.selectedIndex].innerText)

        localStorage.setItem("Adventure Type", adeventure_type[adeventure_type.selectedIndex].value);
        localStorage.setItem("Adventure Travel Date", ab_t_date.value);
        localStorage.setItem("No. Local Adults (Adventure Booking)", ab_sl_adults.value);
        localStorage.setItem("No. Foreign Adults (Adventure Booking)", ab_fr_adults.value);
        localStorage.setItem("No. Local Kids (Adventure Booking)", ab_sl_child.value);
        localStorage.setItem("No. Foregin Kids (Adventure Booking)", ab_fr_child.value);

        //Adventure Booking
        localStorage.setItem("")
        alert("Added to Favourite")
    }
    else
    {
        alert("Please make at least 1 Booking")
    }
}

function cont_to_pay(event)
{

    if((parseInt(overall_total) > 5000) && (confirm("Do you Wish to Continue for payments?") == true))
    {
        event.preventDefault();        
        link.setAttribute("href", "./Payments.html")
        link.click()
    }
    else
    {
        alert("Please make at least 1 Booking")
        
    }
}

function loyality(event)
{

    if((parseInt(overall_total) > 5000))
    {
        event.preventDefault
        alert(`Your Loyality Point Amount = ${loyality_points}`)
    }
    else
    {
        alert("Please make at least 1 Booking. 1 booking = 10 Points")
        
    } 

}

