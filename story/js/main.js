var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
var insertY = ["the soup kitchen","Disneyland","the White House"];
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

var storyTextCn = "外边有34度，:inserta:出去遛弯。当走到:insertb:时小伙伴们都惊呆了，:insertc:。李雷全程目睹但他并没有慌，因为:inserta:是一个270斤的胖子，天气又辣么热。";
var insertA = ["怪兽威利","大老爹","圣诞老人"];
var insertB = ["白宫","救助站","迪士尼乐园"];
var insertC = ["他变成一条鼻涕虫爬走了","他自燃了","他在人行道化成了一坨泥"];

randomize.addEventListener('click', result);
function result() {
    var newStory;
    var xItem;
    var yItem;
    var zItem;  
    var name;
    if (document.getElementById("cn").checked) {
        newStory = storyTextCn;
        xItem = randomValueFromArray(insertA);
        yItem = randomValueFromArray(insertB);
        zItem = randomValueFromArray(insertC);
        newStory = newStory.replace(':inserta:',xItem);
        newStory = newStory.replace(':inserta:',xItem);
        newStory = newStory.replace(':insertb:',yItem);
        newStory = newStory.replace(':insertc:',zItem);
        if (customName.value !== '') {
            name = customName.value;
            newStory = newStory.replace('李雷',name);
        }
    }else{
        newStory = storyText;
        xItem = randomValueFromArray(insertX);
        yItem = randomValueFromArray(insertY);
        zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(':insertx:',xItem);
        newStory = newStory.replace(':insertx:',xItem);
        newStory = newStory.replace(':inserty:',yItem);
        newStory = newStory.replace(':insertz:',zItem);

        if(document.getElementById("uk").checked) {
            var weight = Math.round(300 * 0.0714286) + ' stone';
            var temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
            newStory = newStory.replace('94 fahrenheit',temperature);
            newStory = newStory.replace('300 pounds',weight);
        }
        if(customName.value !== '') {
            var name = customName.value;
            newStory = storyText.replace('Bob',name);
        }
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

