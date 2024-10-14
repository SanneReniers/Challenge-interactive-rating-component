/*document.querySelectorAll('.button').addEventListener('click', () => {
    document.querySelector('.button').classList.add('active_1');
  });*/

  //button = document.querySelectorAll(button)

  /*
  function change_colour(button){
    //button.setAttribute("class", "active_1");

    button.onclick = () => {
        button.setAttribute("class", "active_1");
    }
  }
*/

/*
window.onload = change_colour();

document.querySelectorAll(button).addEventListener("click", change_colour());
function change_colour() {
    button.classList.add('active_1');
    
    document.addEventListener('click', function (event) {
      if (event.target !== button)
      button.classList.remove('active_1');
   });
}
*/


function change_colour (button) {
  //button.addEventListener('click', function () {
  
  //const isActive = button.classList.contains("active_1");

  button.classList.add('active_1');
  
  activebutton = button.innerHTML;

    document.querySelectorAll(".button_num").forEach(e => e.classList.remove('active_1'))
    button.classList.add('active_1');
    
    activebutton = button.innerHTML;
    //console.log(activebutton);

    document.getElementById("selected_number").innerHTML = `You selected ${activebutton} out of 5`

  /*if ( isActive ) {
    console.log("active i guess");
    button.classList.remove('active_1');
  }; */
};

/* 
function change_colour (button) {
  button.forEach((button) => {
    button.forEach(e => e.classList.remove('active_1'));
    button.classList.add('active_1');
});
};
*/


/*

THIS CODE WORKS

document.querySelectorAll(".button_num").forEach((button) => {
  //getting .answer from HTML and adding a click function
  button.addEventListener("click", (event) => {
    document.querySelectorAll(".button_num").forEach(e => e.classList.remove('active_1'))
    button.classList.add('active_1')
  });
});
*/

function send_form (button) {
  const start_state = document.getElementById("start_state");
  const thankyou_state = document.getElementById("thankyou_state");

  start_state.style.display = "none";
  thankyou_state.style.display = "flex";
  store_feedback();
};

function store_feedback() {
    var a = target.innerHTML;
    console.log(a);
}


      /*
      document.addEventListener('click', function (event) {
         if (event.target != button)
         button.classList.remove('active_1');
      });



/*
var box = document.querySelector('.button_num');
function change_colour() {
    //Add 'inner' class when users click on the box
    box.addEventListener('click', function () {
    box.classList.add('active_1');
    });
    //Remove the 'inner' class when users click outside the box
    document.addEventListener('click', function (event) {
    if (event.target !== box)
    box.classList.remove('active_1');
    });
} */