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

// keyboard support: enter to evaluate, backspace to delete, escape to clear
document.addEventListener('keydown', function (e) {
  var d = document.getElementById('display');
  if (e.key === 'Enter') {
    solve();
    e.preventDefault();
    return;
  }
  if (e.key === 'Backspace') {
    d.value = d.value.slice(0, -1);
    e.preventDefault();
    return;
  }
  if (e.key === 'Escape') {
    clr();
    e.preventDefault();
    return;
  }
  // allow digits and basic operators to be typed
  var allowed = '0123456789+-*/.()';
  if (allowed.indexOf(e.key) !== -1) {
    d.value += e.key;
    e.preventDefault();
  }
});
