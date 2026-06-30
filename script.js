let button = document.getElementById("btn");


// // function move(){
// //     button.style.right="100px";
// let count = 0
// // }

// // button.addEventListener("mouseover",move);

// button.addEventListener("mouseover", (event)=> {
    
//   event.target.style.position ="absolute";
//   event.target.style.right = 
    
//     // count++
// })
// let returnedFunction
let count = 0
function move(){
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    count = count +1
    button.textContent = count
}
// button.addEventListener('mouseover', function () {
//     button.style.left = `${Math.ceil(Math.random() * 90)}%`;
//     button.style.top = `${Math.ceil(Math.random() * 90)}%`;
//      returnedFunction = eventReturner();
// });

button.addEventListener("mouseover" , move)
button.addEventListener('click', function () {
    alert('saathh kaadodd');
    button.style.backgroundColor = "green";
    button.removeEventListener("mouseover" , move, false)
    style.backgroundImage = "url('https://i.pinimg.com/236x/f1/23/05/f1230501d33cb2c6055b2d6ea221a22d.jpg')";
    // button.disabled = true;

})
