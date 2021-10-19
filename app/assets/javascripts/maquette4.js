function nav_active(name) {
	document.getElementById('history').classList.remove('active');
	document.getElementById('sv').classList.remove('active');
	document.getElementById('preferences').classList.remove('active');
	document.getElementById('settings').classList.remove('active');
	document.getElementById(name).classList.add('active');
}


$(document).ready(function(){
  $("#history").click(function(){
    $("#content").load("history");
  });
  $("#sv").click(function(){
    $("#content").load("sv");
  });
  $("#preferences").click(function(){
    $("#content").load("preferences");
  });
  $("#settings").click(function(){
    $("#content").load("settings");
  });
});

function direct_mail() {
	var email = document.getElementById("mail");
	if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) && (email.value !== '')) {
		email.classList.remove("is-invalid");
		email.classList.add("is-valid");
		return true;
	} else {
		email.classList.add("is-invalid");
		email.classList.remove("is-valid");
		return false;
	}
}

function direct_id() {
	var id = document.getElementById("id");
	if ((id.value !== "used") && (id.value !== '')) {
		id.classList.remove("is-invalid");
		id.classList.add("is-valid");
		return true;
	} else {
		id.classList.add("is-invalid");
		id.classList.remove("is-valid");
		return false;
	}
}

function direct_psw() {
	var psw = document.getElementById("psw1");
	if ((psw.value.length > 5) && ( /[a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+/.test(psw.value))) {
		psw.classList.remove("is-invalid");
		psw.classList.add("is-valid");
		return true;
	} else {
		psw.classList.add("is-invalid");
		psw.classList.remove("is-valid");
		return false;
	}
}

function direct_apsw() {
	var psw = document.getElementById("psw1");
	var apsw = document.getElementById("psw2");
	if ((psw.value!=='') && (apsw.value!=='') && (psw.value===apsw.value)) {
		apsw.classList.remove("is-invalid");
		apsw.classList.add("is-valid");
		return true;
	} else {
		apsw.classList.add("is-invalid");
		apsw.classList.remove("is-valid");
		return false;
	}
}

function direct() {
	var email = document.getElementById("mail");
	var id = document.getElementById("id");
	var psw = document.getElementById("psw1");
	var apsw = document.getElementById("psw2");
	var check = document.getElementById("check");
	var next = document.getElementById("continue");
	if ((direct_mail()===true) && (direct_id()===true) && (check.checked===true) && (direct_psw()===true) && (direct_apsw()===true)) {
		next.disabled = false;
	} else {
		next.disabled = true;
	}
}
