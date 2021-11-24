const name = document.getElementById('name');
const email = document.getElementById('email');
const meal = document.getElementById('meal');
const services = document.getElementById('services');
const comment = document.getElementById('comment');



function createModal (){
    document.getElementById('name-r').innerHTML = name.value;
    document.getElementById('email-r').innerHtml = email.value;
    document.getElementById('meal-r').innerHTML = meal.value;
    document.getElementById('services-r').innerHTML = services.value;
    document.getElementById('comment-r').innerHTML = comment.value;

    // // get all links in the head (including CSS)
    // const allLinks = document.head.getElementsByTagName('link');
    // // find and replace the element
    // for (var i = 0; i < allLinks.length; i++) {
    //     if ( allLinks[i].href = "css/style.css") {
    //         allLinks[i].href = "css/modal.css";
    //     }
    // }

    
    document.getElementById('review').classList.remove('hidden');
}

function closeModal (){
    document.getElementById('review').classList.add('hidden');
}

