var stage = 1;
var flag;
var images = ["https://cdn.pixabay.com/photo/2016/03/23/17/26/music-note-1275177_960_720.png",
"http://clipartmag.com/images/music-notes-clear-background-7.png","https://www.transparentpng.com/thumb/clef-note/monti-music-clef-gold-photo-png-22.png"];
var size = [60,80,40];
function nextLevel(){
	flag = true;
	stage++;
	if (stage<=4){
		//Loop around the 3 images..
		for (let i = 1; i<stage; i++){
			create(stage-2,flag);
		}
		var random = stage-2;
	}		
	else{
		//Loop around the images over and over again..
		for (let f = 0; f<stage-3; f++){ 
			for(let i = 0; i<images.length; i++){
				create(i,flag);
			}
		}
		random = Math.floor(Math.random()*3);
	}
	//Create the wrong note..
	flag = false;
	create(random,flag);
}
function create(i,flag){
	var out = document.createElement("img");
	out.src=images[i];
	var topPosition = Math.floor(Math.random()*510);
	var leftPosition = Math.floor(Math.random()*660);
	out.style.top = topPosition + "px";
	out.style.left = leftPosition + "px";
	out.style.width = size[i] + "px";
	//out.style.hegiht = size[i] + "px";
	document.getElementById("leftSide").appendChild(out);
	if (flag == true){
		var clone = out.cloneNode(true);
		document.getElementById("rightSide").appendChild(clone);
	}
	else {
		out.onclick = function erase(event){num.innerHTML = stage; leftSide.innerHTML ="";
		rightSide.innerHTML =""; nextLevel();}
	}
}