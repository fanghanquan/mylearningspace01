var para = document.getElementById("player1");
para.addEventListener('click',updateName);
function updateName() {
    var name = prompt("输入一个新的名字");
    para.textContent = "玩家1" + name;
}