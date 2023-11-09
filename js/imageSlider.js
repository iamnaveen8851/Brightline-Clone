// catch the slider div
let sliderContainer = document.querySelectorAll(".sliderCont")

let currentDiv = 0;



// run loop to move the slider towards left
sliderContainer.forEach((slideDiv, index) => {
    slideDiv.style.left = `${index * 100}%`
})


let prev = () => {
   currentDiv--
   if(currentDiv < 0)
   {
    currentDiv = sliderContainer.length-1
    
   }
   slide()
   
}



let next = () => {
   currentDiv++
if(currentDiv == sliderContainer.length-1)
{
    currentDiv = 0
    
}

slide()


}



let slide = () => {

    sliderContainer.forEach(div => {
        div.style.transform = `translateX(-${currentDiv * 100}%)`
    })

}

