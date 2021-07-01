
const navLink=document.getElementById('navLink');
const nav_link = navLink.getElementsByClassName("nav-link");


for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    console.log(current);

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }



  //nav
  const nav = document.querySelector("nav");

window.addEventListener("scroll",function(){
    if(window.pageYOffset > 100)
    {
        nav.classList.add("navbg","shadow")
        nav.style.transition="all .5s linear"
        
    }
    else{
        nav.classList.remove("navbg","shadow")
    }
    
})


//ventures slide
$(document).ready(function(){
    $('.venturesThemes').owlCarousel({
        items:1,
        loop:true,
        center:true,
        nav:true,
        dots:false,
        navText:[`<i class="fas fa-long-arrow-alt-left"></i>`,`<i class="fas fa-long-arrow-alt-right"></i>`],
        responsiveClass:true,
        responsive:{
            0:{
               
               
            },
            700:{
                
            },
            1000:{
                
                
            }
        }
    })
})

