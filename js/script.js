document.addEventListener("DOMContentLoaded",function() {

    const navLinks = document.querySelectorAll('.navegation ul li a');
    navLinks.forEach(function(element){
        element.addEventListener('click', function(event){
            event.preventDefault();
            console.log('event', event);

        

            document.querySelector(event.target.hash).scrollIntoView({
                behavior:'smooth'
            });
    });

    });
})


const form = document.querySelector('.sign-up');
form.addEventListener('button',function(event){
    event.preventDefault();
    alert('Thanks for subscribing!');
})