// Popalzai Workshop Website

console.log("🏍️ Popalzai Workshop Website Started");



// د Back To Top تڼۍ

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});



if(topBtn){

    topBtn.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}







// د عکسونو ساده Zoom Effect

const galleryImages = document.querySelectorAll(".gallery img");


galleryImages.forEach(function(image){


    image.addEventListener("click", function(){


        let popup = document.createElement("div");


        popup.className = "image-popup";


        popup.innerHTML = `

        <img src="${image.src}">

        `;


        document.body.appendChild(popup);



        popup.addEventListener("click", function(){

            popup.remove();

        });


    });


});







// د WhatsApp کلیک ثبتول


const whatsapp = document.querySelector(".whatsapp");


if(whatsapp){


    whatsapp.addEventListener("click",function(){


        console.log("WhatsApp اړیکه خلاصه شوه");


    });


}






// د زنګ تڼۍ


const callButton = document.querySelector(".btn");


if(callButton){


    callButton.addEventListener("click",function(){


        console.log("د زنګ تڼۍ وکارول شوه");


    });


}






// د پاڼې ښکاره کېدل

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(function(entries){


    entries.forEach(function(entry){


        if(entry.isIntersecting){


            entry.target.style.opacity="1";


            entry.target.style.transform="translateY(0)";


        }


    });


},{


    threshold:0.15


});



sections.forEach(function(section){


    section.style.opacity="0";

    section.style.transform="translateY(40px)";


    section.style.transition="0.8s";


    observer.observe(section);


});
