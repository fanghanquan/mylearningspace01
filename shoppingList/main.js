var newItem = document.querySelector('.newItem');
var addItem = document.querySelector('.addItem');
var shoppingList = document.querySelector('.shoppingList');
addItem.onclick = function(){
    var item = newItem.value;
    if(!item){
        alert('输入不能为空');
        return false;
    }
    newItem.value = '';
    var list = document.createElement('li');
    shoppingList.appendChild(list);
    list.textContent = item;
    var button = document.createElement('button');
    list.appendChild(button);
    button.textContent = 'Delete';
    button.setAttribute('class','delButton');
    button.onclick = function(e){
        shoppingList.removeChild(list);
    }
    newItem.focus();
}
console.log(1)