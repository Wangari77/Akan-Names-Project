var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

var male = ["Kwasi", "Adwoa", "Abenaa", "Akua","Yaa","Afua","Ama"]

function akanname(){
    var name = "";
    var gender = document.forms["akanNames"]["gender"].value;
    var date = document.forms["akanNames"]["date"].value;
    var dateObject =new Date(date);
    var day = dateObject.getDay();
    console.log("***", date, "****", dateObject, "*****", day)
if (gender === "female") {
    name=female[day];
}
else if (gender==="male") {
    name = male[day];
}
else { console.log("invalid response")

} 
document.getElementById("alert").innerHTML=name;
return name

}
