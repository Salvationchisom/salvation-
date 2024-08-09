function validateTextbox () {
	var box = document.getElementById("name");
	var box2 = document.getElementById("address");
	var box3 = document.getElementById("date of birth");
	var box4 = document.getElementById("phone");
	var box5 = document.getElementById("email");
	  
	  if (box.value.length < 7 || box2.value.length < 10) {
		  alert(" This field marked in red cannot be blank and must compile with the specified rules");
		  box.focus ();
		  box.style.backgroundColor = "red";
		  return false;
	  }
}
