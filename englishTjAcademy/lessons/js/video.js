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


function createRadnomLikes() {
    var likeNum, dislikeNum;
    const likeDemo = document.querySelectorAll(".likeNum");
    const dislikesDemo = document.querySelectorAll(".dislikeNum");
    const likes = document.querySelectorAll("#like");
    const dislikes = document.querySelectorAll("#dislike");
    for(var i = 0; i < likes.length; i++)  {
        likeNum = Math.floor(Math.random() * 60);
        dislikeNum = Math.floor(Math.random() * 3);
        likeDemo[i].innerText = likeNum;
        dislikesDemo[i].innerText = dislikeNum;
    

        likes[i].addEventListener("click", like);
        dislikes[i].addEventListener("click", dislike);

    }

    var ink = 1;
    function like(e) {
        var a = e.target.parentElement.children[1];
        var aa = parseInt(a.innerText);
            a.innerText = 1 + aa;
            e.target.style.color = 'blue'
    }

    function dislike(e) {
        var a = e.target.parentElement.children[3];
        var aa = parseInt(a.innerText);
            a.innerText = 1 + aa;
            e.target.style.color = 'red'
    }
}

document.addEventListener("DOMContentLoaded", createRadnomLikes)




