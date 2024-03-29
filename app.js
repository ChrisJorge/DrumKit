for (i = 0; i < document.getElementsByClassName('drum').length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let press = this.innerHTML
        sound(press)
        buttonAnimation(press)
    });
}

document.addEventListener('keydown', function(event){
    let press = event.key
    sound(press)
    buttonAnimation(press)
})


function sound(key)
{
    let audio;
    switch (key)
    {
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3'); audio.play();
            break;

        case 'a':
            audio = new Audio('./sounds/tom-2.mp3'); audio.play();
            break;

        case 's':
            audio = new Audio('./sounds/tom-3.mp3'); audio.play();
            break;

        case 'd':
            audio = new Audio('./sounds/tom-4.mp3'); audio.play();
            break;

        case 'j':
            audio = new Audio('./sounds/crash.mp3'); audio.play();
            break;
        
        case 'k':
            audio = new Audio('./sounds/snare.mp3'); audio.play();
            break;

        case 'l':
            audio = new Audio('./sounds/kick-bass.mp3'); audio.play();
            break;
        
        default:
            break;
    }
}

function buttonAnimation(key){
    let current_button = document.querySelector("." + key)
    current_button.classList.toggle('pressed')
    setTimeout(function(){current_button.classList.toggle('pressed')}, 100)
   
}