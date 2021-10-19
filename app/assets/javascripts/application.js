// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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
