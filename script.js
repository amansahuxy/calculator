function pick(num) {
  document.getElementById("display").value += num;
}

function solve() {
  try {
    var x = document.getElementById("display").value;
    var y = eval(x);
    document.getElementById("display").value = y;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

function clr() {
  document.getElementById("display").value = "";
}
