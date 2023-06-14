let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
} 
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, $storedName`;
}
myButton.onclick = () => {
    setUserName();
  };
  