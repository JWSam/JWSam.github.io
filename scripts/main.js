list = ["Genji", "Reinhardt", "Lúcio", "Pharah", "Mei", "Winston", "Roadhog", "Soldier", "Tracer", "Reaper", "Junkrat", "Widowmaker", "Hanzo", "Zarya", "Symmetra", "Mercy", "McCree", "Bastion", "Torbjörn"]


function myFunction() {
	var random;
	random = Math.floor((Math.random() * list.length) + 0); 
	
    document.getElementById("changeme").innerHTML = list[random];
}