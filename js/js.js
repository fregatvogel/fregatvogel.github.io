//i forgor how javascript works type shenanigans

document.addEventListener("keydown", (event) => {
    if (event.code == 'F1') {
        alert('hi :)');
    }
});


window.addEventListener("DOMContentLoaded", (event) => {
    //A+ coding right here
    const changeStateTitleBarTop = document.querySelector("main");
    const changeStateTitleBarMain = document.querySelector("#installshield-bigtext");
    const closeButton = document.querySelector("#close-button");
    const helpButton = document.querySelector("#help-button");

    changeStateTitleBarTop.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar inactive";
        document.getElementById("content-title-bar").className = "title-bar";
    });

    changeStateTitleBarMain.addEventListener("click", () => {
        document.getElementById("top-title-bar").className = "title-bar";
        document.getElementById("content-title-bar").className = "title-bar inactive";
    });

    closeButton.addEventListener("click", () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); //ayo replit auto suggest???
    });

    helpButton.addEventListener("click", () => {
        //opera zou ook hier tussen moeten maar ehhhhh
        //console.log(window.navigator.userAgent);

        if(window.navigator.userAgent.indexOf("Firefox") != -1){
            window.open("https://support.mozilla.org/en-US/products/firefox","_blank"); 
        } else if (window.navigator.userAgent.indexOf("Edg") != -1){
            window.open("https://support.microsoft.com/en-gb/microsoft-edge","_blank");   
        } else if (window.navigator.userAgent.indexOf("Chrome") != -1){
            window.open("https://support.google.com/chrome?p=help","_blank");  
        } else if (window.navigator.userAgent.indexOf("Safari") != -1){
            window.open("https://support.apple.com/safari","_blank");  
        }

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