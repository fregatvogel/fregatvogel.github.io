//i forgor how javascript works type shenanigans

document.addEventListener("keydown", (event) => {
    if (event.code == 'F1') {
        help();
    }
});


window.addEventListener("DOMContentLoaded", (event) => {
    //A+ coding right here
    const changeStateTitleBarTop = document.querySelector("main");
    const changeStateTitleBarMain = document.querySelector("#installshield-bigtext");
    const changeStateTitleBarMain2 = document.querySelector("#installshieldtitle");
    const closeButton = document.querySelector("#close-button");
    const closeButton2 = document.querySelector("#close-button-2");
    const minButton = document.querySelector("#min-button");
    const resButton = document.querySelector("#res-button");
    const helpButton = document.querySelector("#help-button");

    changeStateTitleBarTop.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });

    changeStateTitleBarMain.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar";
        document.getElementById("content-title-bar").className = "title-bar inactive";
    });

    changeStateTitleBarMain2.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar";
        document.getElementById("content-title-bar").className = "title-bar inactive";
    });

    helpButton.addEventListener("click", () => {
        //console.log(window.navigator.userAgent);
       help();
    });

    resButton.addEventListener("click", () => {
        alert('hi :)');
    });

    minButton.addEventListener("click", () => {
        //welp, guess my other plan didn't work out as i hoped it would
        window.open("https://incubator.miraheze.org/wiki/Wp/enm/Frogge", "_blank");
    });

    closeButton.addEventListener("click", () => {
        window.location = "./ect/page";
    });

    closeButton2.addEventListener("click", () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); //ayo replit auto suggest???
    });

});


/*window.addEventListener("DOMContentLoaded", (event) => {
    //dit werkt wel, huh
    const inactive = document.querySelector("#top-title-bar");

    inactive.addEventListener("click", () => {
        console.log("test");
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });
});*/


function help(){
    if(window.navigator.userAgent.indexOf("Firefox") != -1){
        window.open("https://support.mozilla.org/en-US/products/firefox","_blank"); 
    } else if (window.navigator.userAgent.indexOf("OPRGX") != -1){
        window.open("https://help.opera.com/en/latest/","_blank");
    } else if (window.navigator.userAgent.indexOf("Edg") != -1){
        window.open("https://support.microsoft.com/en-gb/microsoft-edge","_blank");   
    } else if (window.navigator.userAgent.indexOf("Chrome") != -1){
        window.open("https://support.google.com/chrome?p=help","_blank");  
    } else if (window.navigator.userAgent.indexOf("Safari") != -1){
        window.open("https://support.apple.com/safari","_blank");  
    }
}
