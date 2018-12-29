var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src','images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = displayImage;
}
function displayImage() {
  var imgSrc = newImage.getAttribute('src');
  displayedImage.setAttribute('src',imgSrc);
}
/* 编写 变亮/变暗 按钮 */

