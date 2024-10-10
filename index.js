var sd = ["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];
for(let i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var key = this.innerHTML;
        makesound(key);
        buttonPressed(key);
        setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);
    });
    document.addEventListener("keydown",function(event1){
        var key = event1.key;
        makesound(key);
        buttonPressed(key);
        setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);
    });
    function makesound(key){
        switch(key){
            case "w":var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
            case "a":var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
            case "s":var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
            case "d":var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
            case "j":var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
            case "k":var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
            case "l":var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        }
    }
    function buttonPressed(key){
        document.querySelector("."+key).classList.add("pressed");
    }
}