const snake = document.getElementById("snake");
function movement(event)
{
	var topVal = parseInt(window.getComputedStyle(snake).top, 10);
	let leftVal = parseInt(window.getComputedStyle(snake).left, 10);
	console.log("alo")
	let pressed = event.charCode;
	if(pressed == 83 || pressed == 115) // numeros representando a letra (S && s)
		snake.style.top = (topVal + 16) + "px";
	if(pressed == 68 || pressed == 100) // numeros representando a letra (D && d)
		snake.style.left = (leftVal + 16) + "px";
	if(pressed == 64 || pressed == 97) // numeros representando a letra (A && a)
		snake.style.left = (leftVal - 16) + "px";
	if(pressed == 87 || pressed == 119) // numeros representando a letra (W && w)
		snake.style.top = (topVal - 16) + "px";

}
// function getClick()
// {
	addEventListener("keypress", movement)
// }
// document.addEventListener("DOMContentLoaded", getClick)