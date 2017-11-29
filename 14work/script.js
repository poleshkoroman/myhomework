var audio = document.getElementsByClassName("song")[0];
var butPlay = document.getElementsByClassName("play")[0];
var butStop = document.getElementsByClassName("stop")[0];
var butSlow = document.getElementsByClassName("slow")[0];
var butFast = document.getElementsByClassName("fast")[0];
var butLoop = document.getElementsByClassName("loop")[0];
var changeVolume = document.getElementsByClassName("volume")[0];
var current = document.getElementsByClassName("current")[0];
var allmusic = document.getElementsByClassName("allmusic")[0];
var time = document.getElementsByClassName("time")[0];
var move = document.getElementsByClassName("move")[0];
var playlist = document.getElementsByClassName("playlist")[0];
var ul = document.getElementsByTagName("ul")[0];
var minutescurrent = 0, secondscurrent = 0, minutesduration, secondsduration, currentaudio, previousaudio;



var playorpause = function(name, i, data){
	name.addEventListener("click", function(e){
		if (this == document.getElementsByClassName("button-playlist")[i]){
			currentaudio = this.getAttribute("id");
			if (audio.getAttribute("src") == data[currentaudio].path) {

			}
			else audio.src = data[currentaudio].path;
			this.parentNode.classList.add("currentaudio");
			this.innerHTML = "<img src = 'images/pause.png'>";
			butPlay.innerHTML = "<img src = 'images/pause.png'>"
			butPlay.classList.add("go");
		}
		if (!this.classList.contains("go")) {
			for (var j = 0; j < data.length; j++){
				if (audio.getAttribute("src") == data[j].path){
					document.getElementsByClassName("button-playlist")[j].innerHTML = "<img src = 'images/pause.png'>";
					document.getElementsByClassName("button-playlist")[j].parentNode.classList.add("currentaudio");
					document.getElementsByClassName("button-playlist")[j].classList.add("go");
					butPlay.innerHTML = "<img src = 'images/pause.png'>";
				    butPlay.classList.add("go");
				}
				else {
					document.getElementsByClassName("button-playlist")[j].innerHTML = "<img src = 'images/play.png'>";
					document.getElementsByClassName("button-playlist")[j].parentNode.classList.remove("currentaudio");
					document.getElementsByClassName("button-playlist")[j].classList.remove("go");
				}
			}
			audio.play();
			audio.playbackRate = 1;
			audio.volume = changeVolume.value / 100;
		}
		else {
			this.innerHTML = "<img src = 'images/play.png'>";
			for (var j = 0; j < data.length; j++){
				if (audio.getAttribute("src") == data[j].path){
					document.getElementsByClassName("button-playlist")[j].innerHTML = "<img src = 'images/play.png'>";
					document.getElementsByClassName("button-playlist")[j].classList.remove("go");
					butPlay.innerHTML = "<img src = 'images/play.png'>";
					butPlay.classList.remove("go");
				}
			}
			audio.pause();
			audio.playbackRate = 1;
			audio.volume = changeVolume.value / 100;
		}
		setInterval(function() {
			current.style.width = ((audio.currentTime / audio.duration) * allmusic.getBoundingClientRect().width)  + "px";
			minutescurrent = Math.floor(audio.currentTime / 60);
			secondscurrent = Math.floor(audio.currentTime % 60);
			if (secondscurrent  > 59)  secondscurrent = 0;
			if (Math.floor(audio.duration) == Math.floor(audio.currentTime)) {
				currentaudio++;
				previousaudio = currentaudio - 1;
				if (currentaudio == data.length) { currentaudio = 0; previousaudio = data.length - 1;};
				if (!audio.classList.contains("loop")){
					audio.src = data[currentaudio].path;
					document.getElementsByClassName("button-playlist")[currentaudio].parentNode.classList.add("currentaudio");
					document.getElementsByClassName("button-playlist")[currentaudio].innerHTML = "<img src = 'images/pause.png'>";
					document.getElementsByClassName("button-playlist")[currentaudio].classList.add("go");
					document.getElementsByClassName("button-playlist")[previousaudio].parentNode.classList.remove("currentaudio");
					document.getElementsByClassName("button-playlist")[previousaudio].innerHTML = "<img src = 'images/play.png'>";
					document.getElementsByClassName("button-playlist")[previousaudio].classList.remove("go");
					audio.play();
				}
			}
			(secondscurrent < 10) ? secondscurrent = "0" + secondscurrent:secondscurrent;
			time.innerText = "0" + minutescurrent + ":" + secondscurrent + "/" + minutesduration + ":" + secondsduration;
		}, 1000);	
	})
}
var xhr = new XMLHttpRequest; 
xhr.open("GET","audio.json", true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	audio.src = data[0].path; 
	for (var i = 0; i < data.length; i++){
		var li = document.createElement("li");
		ul.appendChild(li);
		li.innerHTML += "<image class = 'img-playlist' src='" + data[i].image + "'>" + " " + data[i].name + " " + "<button type = 'button' class = 'button-playlist' id = " + i +"><img src = 'images/play.png'></button>"; 
		playorpause(document.getElementsByClassName("button-playlist")[i], i, data);
	}
	playorpause(butPlay, 0, data);
	butLoop.addEventListener("click", function(){
		this.classList.toggle("press");
		if (audio.loop) audio.loop = false;
			else audio.loop = true;
	})
	audio.addEventListener("loadedmetadata", function(){
		minutesduration = Math.floor(audio.duration / 60);
		(minutesduration < 10) ? minutesduration = "0" + minutesduration:minutesduration;
		secondsduration = Math.floor(audio.duration % 60);
		(secondsduration < 10) ? secondsduration = "0" + secondsduration:secondsduration;
		time.innerText = "0" + minutescurrent + ":" + "0" + secondscurrent + "/" + minutesduration + ":" + secondsduration;
		butStop.addEventListener("click", function(){
			audio.pause();
			audio.currentTime = 0;
			butPlay.innerHTML = "<img src = 'images/play.png'>";
			butPlay.classList.remove("go");
			for (var j = 0; j < data.length; j++){
				if (audio.getAttribute("src") == data[j].path){
					document.getElementsByClassName("button-playlist")[j].innerHTML = "<img src = 'images/play.png'>";
					document.getElementsByClassName("button-playlist")[j].classList.remove("go");
				}
			}
			time.innerText = "0" + minutescurrent + ":" + "0" + secondscurrent + "/" + minutesduration + ":" + secondsduration;
		})
		butSlow.addEventListener("click", function(){
			audio.playbackRate *= 0.8;
		})
		butFast.addEventListener("click", function(){
			audio.playbackRate *= 1.25;
		})
		changeVolume.addEventListener("change", function(){
			audio.volume = this.value / 100;
		})
		move.addEventListener("click", function(e){
			current.style.width =  e.pageX - 23 + "px";
			audio.currentTime = (current.getBoundingClientRect().width / allmusic.getBoundingClientRect().width) * audio.duration;
		})
	})

}
xhr.send();



// Методы

// .play(); - запускает аудио
// .pause(); - остановка на паузу

// Свойства

// .src; - путь к аудио через js
// .controls;
// .volume; от 0..1 значения громкости
// .currentTime; - количество секунд проигрывания
// .duration; количество секунд общей длительности песни
// .muted; - если true - звук отключен
// .playbackRate; - положительное число (=1 по умолчанию), скорость воспроизведения
// .loop; - если true - то песня играет бесконечно

// События

// loadeddata; - возникает, когда был загружен достаточный кусок для воспроизведения
// loadedmetadata; - возникает раньше, и знаменует, когда были загружены данные
// pause; - песня на паузе
// play; - на воспроизведение
// volumechange; - изменение громкости

// Видео

// .videoWidth; - размеры основного видео (только чтение)
// .videoHeight;
// .width; - указываем размеры сами
// .height

