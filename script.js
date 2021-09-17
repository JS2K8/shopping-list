// Adds an item when there's input, adds nothing if input is blank or whitespace

function addItem() {
  var checkEmpty = document.getElementById("input").value;
  if (checkEmpty.trim() !== "") {
    var txtVal = document.getElementById("input").value,
    node = document.createElement("li"),
    listnode = document.getElementById("list"),
    txtNode = document.createTextNode(txtVal);
    node.appendChild(txtNode);
    listnode.appendChild(node);
    document.getElementById('input').value='';
  }
  else {
    document.getElementById("input").value="";
  }
}

// Changes the class style on click

function changeClass() {
  var newClass = document.getElementById("changeThis")
  newClass.classList.toggle("checked");
}

// Adds crossed class to list item on click

var list = document.getElementById("list");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Double click to remove an item

list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.remove();
  }
}, false);

// On key press

function enterPress(event) {
  var x = event.keyCode;
  if (x == 13) {
    addItem()
  }
}

// Clears the list

function clearList() {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

// Remove only list items that have the crossed class

function clearCrossed() {
  var elems = document.querySelectorAll(".checked");
  elems.forEach(function(element) {
    element.parentNode.removeChild(element);
  });
}
