let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");

let sidebarFlag = 0;

window.onresize = function () {
    if (window.innerWidth < 1060) {
        sidebar.style.display = "none"
        sidebarFlag = 0;
    } else {
        sidebar.style.display = "inherit"
        sidebarFlag = 1;
    }
}

menu.addEventListener("click", () => {
    if (sidebarFlag === 0) {
        sidebar.style.display = "inherit"
        sidebarFlag = 1;
    }
    else {
        sidebar.style.display = "none"
        sidebarFlag = 0;
    }
})

let dashboardUpperRightFlag = 0,
    upperRightInfo = document.querySelector("#upper-right-info");
let progressHeading = document.querySelector("#progress-heading");// change inner html
let progressNumber = document.querySelector("#progress-number"); // change inner html
let progressP = document.querySelector("#progress-p") // change in display
let progressPTwo = document.querySelector("#progress-p-2") // change in display
let progress = document.querySelector("#progress"); //change width
let dashboardUpperRight = document.querySelector(".dashboard-upper-right") // Change in gradient

let progressInfoFirst = {
    heading : "Credit Balance",  
    number : "15,20,000",
    barText : "Available 76%",
    barColor : "#00E542",  
    width : "76%" 
}
let progressInfoSecond = {
    heading : "Credit Used",  
    number : "04,80,000",
    barText : "Used 24%",
    barColor : "#F4B000",  
    width : "24%" 
}

upperRightInfo.addEventListener("click", ()=>{
    if(dashboardUpperRightFlag === 0){
        progress.style.width = progressInfoSecond.width;
        progressPTwo.style.display = "inline"
        progressP.style.display = "none"
        progressHeading.innerHTML = progressInfoSecond.heading
        progressNumber.innerHTML = progressInfoSecond.number
        dashboardUpperRight.style.backgroundImage = "linear-gradient(to bottom, #FFC325, #00738B)"
        dashboardUpperRightFlag = 1;
    }
    else{
        progress.style.width = progressInfoFirst.width;
        progressP.style.display = "inline"
        progressPTwo.style.display = "none"
        progressHeading.innerHTML = progressInfoFirst.heading
        progressNumber.innerHTML = progressInfoFirst.number
        dashboardUpperRightFlag = 0;
    }

})