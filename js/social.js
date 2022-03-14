let tableauPortraits = document.querySelectorAll("img");

//Lors du clic sur l'image, on récupère le numéro d'index qu'on stocke dans la variable indexPortrait.
//On ajoute la classe hidden sur l'article actuel et on l'enlève de celui qui à le data-article = à l'index de l'img.

for(let portrait of tableauPortraits){
    portrait.addEventListener("click", function(){
        let num = this.getAttribute("data-arcane");

        if(document.getElementById("art" + num).classList.contains("on") === true){

            document.querySelector(".on").classList.remove("on");
            document.getElementById("default").classList.add("on");

        }else {
            
            document.querySelector(".on").classList.remove("on");
            document.getElementById("art" + num).classList.add("on");

        }

    })
};