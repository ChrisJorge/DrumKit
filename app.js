for (i = 0; i < document.getElementsByClassName('drum').length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let press = this.innerHTML
        console.log(press)
    });
}