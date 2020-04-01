
const modalOverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');


for(let card of cards){
    card.addEventListener("click",function(){
        const id = card.getAttribute("id")
        console.log(id);
        const img = card.querySelector(`#${id} img`).getAttribute("src")
        const lvs = card.querySelectorAll('.level.not')

        console.log(lvs.length)
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src=`${img}`

        let nomeTech = modalOverlay.querySelector(".title");
        nomeTech.innerHTML= "<h1>"+ id +"<h1>";
        for(i=0; i<lvs.length;i++){
                  switch (i) {
                case 0:
                    console.log("case 1")
                    modalOverlay.querySelector(".level:nth-last-child(1)").classList.add("not");
                    break;
                case 1:
                    modalOverlay.querySelector(`.level:nth-last-child(2)`).classList.add("not");
                    break;
                case 2:
                    modalOverlay.querySelector(`.level:nth-last-child(3)`).classList.add("not");
                    break;
                case 3:
                    modalOverlay.querySelector(`.level:nth-last-child(4)`).classList.add("not");
                    break;
                default:
                    break;
            }            
        }
    });
}

document.querySelector('.modal-close').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
});

