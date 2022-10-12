let lightbulb = document.getElementById("lightbulb");
let givestat = document.querySelectorAll(".status");
let isOn = true;
lightbulb.addEventListener("click", function(){
    if(isOn){
        lightbulb.src = "https://www.freeiconspng.com/uploads/light-bulb-png-bulb-png1247-12.png";
        isOn = false;
        givestat[0].innerHTML = "Status : On";
    }

    else if(!isOn){
        lightbulb.src = "https://www.freeiconspng.com/uploads/light-bulb-png-bulb-png1243-0.png";
        isOn = true;
        givestat[0].innerHTML = "Status : Off";
    }
})