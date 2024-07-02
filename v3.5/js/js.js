//i forgor how javascript works type shenanigans

document.addEventListener("keydown", (event) => {
    if (event.code == 'F1') {
        alert('hi :)');
    } 
});


window.addEventListener("DOMContentLoaded", (event) => {
    //A+ coding right here
    const changeStateTitleBarTop = document.querySelector("#content");
    const changeStateTitleBarMain = document.querySelector("#installshield-bigtext");

    changeStateTitleBarTop.addEventListener("click", () => {
        console.log("flip");
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });

    changeStateTitleBarMain.addEventListener("click", () => {
        console.log("flipped again");
        document.getElementById("top-title-bar").className = "title-bar";
        document.getElementById("content-title-bar").className = "title-bar inactive";
    });  
})


/*window.addEventListener("DOMContentLoaded", (event) => {
    //dit werkt wel, huh
    const inactive = document.querySelector("#top-title-bar");

    inactive.addEventListener("click", () => {
        console.log("test");
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });
});*/