const counter = document.getElementById("button") as HTMLButtonElement;
let count: number = 0;

counter.onclick = function() {
  count++;
  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = count.toString();
  }
}