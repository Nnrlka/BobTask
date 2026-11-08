const names = ["John", "Tom", "Tim", "Jack"]
const btn = document.getElementById("add-btn");
const list = document.querySelector(".list");

names.forEach((name) => {
 const li = document.createElement("li")
 li.textContent = name
 list.appendChild(li)
})

//всё что успел сделать, больше разбирался в сути

//необходимо реализовать добавление имени
let name = "Bob"
function addBob() {
  const li = document.createElement("li");
  li.textContent = "Bob";
  list.appendChild(li);

  li.addEventListener('click', )
}
btn.onclick = addBob;

//delete bob
function DeleteBob() {
  const li = document.Element("li"); 

}


