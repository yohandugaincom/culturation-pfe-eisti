
function time(x) {
	if (x==="default") {
		document.getElementById("set-time").innerHTML = "Recommandé";
	} else {
		if (x==='all') {
			document.getElementById("set-time").innerHTML = "∞ Désactivée";
		} else {
			document.getElementById("set-time").innerHTML = "≤ " + x + " minutes";
		}
	}
}

function settype(x) {
	var y = document.getElementById(x);
	var s1 = document.getElementById('s1');
	var s2 = document.getElementById('s2');
	var s3 = document.getElementById('s3');
	if (document.getElementById('search_input').value !== '') {
		if (y.style.display === "none") {
	    	y.style.display = "block";
	  	} else {
	    	y.style.display = "none";
	  	}
		if ((s1.checked==true) && (s2.checked==false) && (s3.checked==false)) {
			document.getElementById('subvids').style.display = "block";
		} else {
			document.getElementById('subvids').style.display = "flex";
		}
	}
	if ((s1.checked==false) && (s2.checked==false) && (s3.checked==false)) {
		document.getElementById('results').style.display = "block";
		document.getElementById('pleaseselect').style.display = "block";
	} else {
		document.getElementById('pleaseselect').style.display = "none";
	}
}

function search() {
	var videos = document.getElementById('videos')
	var articles = document.getElementById('articles')
	var podcasts = document.getElementById('podcasts')

	if (document.getElementById('search_input').value === '') {
		videos.style.display = "none";
		articles.style.display = "none";
		podcasts.style.display = "none";
		document.body.style.backgroundColor = "rgb(22, 23, 25)";
		document.getElementById('rec-ten').style.display = "block";
	} else {
		document.body.style.backgroundColor = "#2d3436";
		document.getElementById('rec-ten').style.display = "none";
		document.getElementById('results').style.display = "block";
		if (document.getElementById('s1').checked==true) {
			videos.style.display = "block";
		}
		if (document.getElementById('s2').checked==true) {
			articles.style.display = "block";
		}
		if (document.getElementById('s3').checked==true) {
			podcasts.style.display = "block";
		}
		if ((s1.checked==true) && (s2.checked==false) && (s3.checked==false)) {
			document.getElementById('subvids').style.display = "block";
		} else {
			document.getElementById('subvids').style.display = "flex";
		}
	}
}

function foc() {
	document.body.style.backgroundColor = "rgb(22, 23, 25)";
	document.getElementById('rec-ten').style.display = "block";
	var videos = document.getElementById('videos')
	var articles = document.getElementById('articles')
	var podcasts = document.getElementById('podcasts')
	videos.style.display = "none";
	articles.style.display = "none";
	podcasts.style.display = "none";
}
function blur() {
	document.body.style.backgroundColor = "#2d3436";
	document.getElementById('rec-ten').style.display = "none";
	document.getElementById('results').style.display = "block";
	var videos = document.getElementById('videos')
	var articles = document.getElementById('articles')
	var podcasts = document.getElementById('podcasts')
	if (document.getElementById('s1').checked==true) {
		videos.style.display = "block";
	}
	if (document.getElementById('s2').checked==true) {
		articles.style.display = "block";
	}
	if (document.getElementById('s3').checked==true) {
		podcasts.style.display = "block";
	}
	if ((s1.checked==true) && (s2.checked==false) && (s3.checked==false)) {
		document.getElementById('subvids').style.display = "block";
	} else {
		document.getElementById('subvids').style.display = "flex";
	}
}
function blu() {
	if (document.getElementById('search_input').value !== '') {
		setTimeout(blur, 100);
	}
}

function autocomplete(text) {
	document.getElementById('search_input').value = text;
	document.body.style.backgroundColor = "#2d3436";
	document.getElementById('rec-ten').style.display = "none";
	blur();
}
