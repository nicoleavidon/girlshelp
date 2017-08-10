function showProfileDropdown() {
    document.getElementById("profileDropdown").classList.toggle("show");
  }

function showQuestion(){
  var user_question = document.getElementById("question").value;
  document.getElementById("printedquestion").innerHTML=user_question;
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  // var li = document.createElement("li");
  var inputValue = document.getElementById("question").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("printedquestion").appendChild(li);
  }
  document.getElementById("question").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
