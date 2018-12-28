var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (var i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src',"images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
}
  

/* 编写 变亮/变暗 按钮 */

