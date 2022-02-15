let root = document.querySelector(':root');
let a = window.getComputedStyle(root);
const element = document.querySelector('.earth')

const speedButtons = document.getElementById('speedButton')
const accordion = document.getElementsByClassName('accordion')
const planet = document.getElementsByClassName('planet');
let counter = 0


for (let i = 0; i < speedButton.children.length ; i++) {
  speedButton.children[i].addEventListener("click", (e) => {
        console.log(e) 
        if(e.target.id === 'x1'){
          root.style.setProperty('--planetspeed', '1')

        } else if(e.target.id === 'x10'){
          root.style.setProperty('--planetspeed', '10')

        } else if(e.target.id === 'x30'){
          root.style.setProperty('--planetspeed', '30')

        } else if(e.target.id === 'x50'){
          root.style.setProperty('--planetspeed', '50')

        } else if(e.target.id === 'x70'){
          root.style.setProperty('--planetspeed', '70')
        }
      }
    );
  }


for (let i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener("click", function() {

    this.classList.toggle("active");
    planet[i].classList.toggle("selector")
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}





