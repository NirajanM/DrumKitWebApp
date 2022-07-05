let drum = document.querySelectorAll(".drum");
for(let i=0 ; i<drum.length ; i++){
    drum[i].addEventListener("click",()=>{
        addSound(drum[i].innerHTML);
        changeColor(drum[i].innerHTML);
    })
}
document.addEventListener("keypress",(event)=>{
    addSound(event.key);
    changeColor(event.key);
})
function addSound(key){
    switch(key){
        case "a":
            let audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            let audio1 = new Audio("./sounds/tom-2.mp3");
            audio1.play();
            break;
            
        case "d":
            let audio2 = new Audio("./sounds/tom-3.mp3");
            audio2.play();
            break;
        case "f":
            let audio3 = new Audio("./sounds/tom-4.mp3");
            audio3.play();
            break;
        case "j":
            let audio4 = new Audio("./sounds/snare.mp3");
            audio4.play();
            break;
        case "k":
            let audio5 = new Audio("./sounds/crash.mp3");
            audio5.play();
            break;
        case "l":
            let audio6 = new Audio("./sounds/kick-bass.mp3");
            audio6.play();
            break;
        default:
            console.log(key);
      
    }
}
function changeColor(key){
    document.querySelector("."+ key).classList.add("pressed");
    setTimeout( ()=>{ document.querySelector("." + key).classList.remove("pressed")}, 100); 
}