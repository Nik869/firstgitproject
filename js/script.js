
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



//mobile slide
$(document).ready(function(){
    $('.mobile_slider').owlCarousel({
        items:4,
        loop:true,
        center:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:2000,
        nav:false,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
               items:1
               
            },
            700:{
                items:3
            },
            1000:{
                items:4
                
            }
        }
    })
})


// form validation
const myform= document.getElementById('myform');
const fname=document.getElementById("fname");
const lname= document.getElementById("lname");
const email=document.getElementById("email");
const phone= document.getElementById("phone");
const business= document.getElementById("business");
const helpyou=document.getElementById("helpYou");
const enquiry=document.getElementById("enquiry");

//reg
const fnameReg=/^[a-zA-Z]{3,20}$/;
const lnameReg=/^[a-zA-Z]{5,50}$/;
const emailReg=/^([a-z0-9._]{4,60})([@]{1})([a-z]{3,25})([.]{1})([a-z.]{2,10})$/;
const phoneReg=/^[0-9]{10}$/;
const businesstReg=/^[a-zA-Z\s.]{5,100}$/;
const enquiryReg=/^[a-zA-Z\s0-9.\-_\,]{10,}$/;


myform.addEventListener("submit",function(e){
    e.preventDefault();
    if(fname.value!="" || lname.value!="" || email.value!=""  || phone.value!="" || business.value!="" || helpyou.value!="" || enquiry.value!=""){
        if(fnameReg.test(fname.value)){
            firstError.innerText="";
            if(lnameReg.test(lname.value)){
                lastError.innerText="";
                if(emailReg.test(email.value))
                {
                    emailError.innerText="";
                    if(phoneReg.test(phone.value)){
                        phoneError.innerText=""
                        if(businesstReg.test(business.value)){
                            businessError.innerText="";
                            if(helpyou.value!=""){
                                helpError.innerText="";
                                if(enquiryReg.test(enquiry.value)){
                                    enquiryError.innerText="";
                                    myform.submit();
                                    successMsg.innerText="Successfully send!!!!!!";
                                }
                                else{
                                    enquiryError.innerText="Please enter correct enquiry";
                                }
                            }
                            else{
                                helpError.innerText="Select the one question";
                            }
                        }
                        else{
                            businessError.innerText="Please enter correct business name";
                        }
                    }
                    else{
                        phoneError.innerText="Please enter correct phone number"
                    }
                }
                else{
                    emailError.innerText="Please enter correct email id";
                }
            }
            else{
                lastError.innerText="Please enter correct lname";

            }
        }
        else{
            firstError.innerText="Please enter correct fname";
        }
    }
    else{
        firstError.innerText="fname field is required";
        lastError.innerText="lname field is required";
        emailError.innerText="email field is required";
        phoneError.innerText="phone fiels is required";
        businessError.innerText="business field is required";
        helpError.innerText="Select the one question";
        enquiryError.innerText="Enquiry field is required";

    }
})




window.addEventListener("scroll",function(){
    const scrollTop = document.querySelector(".toTop")
    scrollTop.classList.toggle("active",window.scrollY > 100)
})






