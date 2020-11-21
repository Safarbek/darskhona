const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const list = document.querySelectorAll(".nav-links li")
   
    burger.addEventListener("click", () =>{ 
        nav.classList.toggle("nav-active")

        list.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
                return ''
            }
            link.style.animation = `navLink 0.5s ease forwards ${index / 7+1.2}s`;
        }) 


        // burger animation

        burger.classList.toggle("toggel")
    })


   
}
navSlide()

// body animation

var russianStart = document.querySelector(".russianStart");
russianStart.onclick = () => {
    document.location = '../lessons/exerciseRu.html'
}

var englishStart = document.querySelector(".englishStart");
englishStart.onclick = () => {
    document.location = '../lessons/exerciseEn.html'
}


var y = document.querySelector(".y");
y.onclick = () => {
    window.location.href = 'https://www.youtube.com/channel/UCgoPupJNkZPnAUPJvtPasdw' 
}
var ins = document.querySelector(".in");
ins.onclick = () => {
    window.location.href = 'https://instagram.com/tojikacademy/' 
}


