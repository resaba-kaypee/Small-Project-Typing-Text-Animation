let string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let stringArray = string.split("");

function animate(){
  if(stringArray.length > 0){
    document.getElementById('display').innerHTML += stringArray.shift();
  } else{
    document.getElementById('display').innerHTML = "";
    stringArray = string.split("");
  }
  setTimeout(animate, 50);
}
animate();
