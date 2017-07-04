const buttonsArray = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const soundLinks = [
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/bubbles.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/clay.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/confetti.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/corona.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/flash-1.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/glimmer.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/moon.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/pinwheel.mp3',
  'https://raw.githubusercontent.com/jonobr1/Neuronal-Synchrony/master/assets/A/splits.mp3'
];
const soundsArray = soundLinks.map(s => new Audio(s));
const buttonElements = document.getElementsByTagName('button');

for(let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener("mousedown", function(){    
    buttonElements[i].className = 'active';
    soundsArray[i].play();
  });   
  buttonElements[i].addEventListener("mouseup", function(){
    buttonElements[i].className = '';
  });   
}
   
document.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'a':      
    case 's':      
    case 'd':      
    case 'f':      
    case 'g':      
    case 'h':      
    case 'j':      
    case 'k':      
    case 'l':
      e.preventDefault();
      const index = buttonsArray.indexOf(e.key);      
      if(index >= 0){
        triggerMouseEvent (buttonElements[index], 'mousedown');
        setTimeout(function() {
          triggerMouseEvent (buttonElements[index], 'mouseup');
        }, 100);
      }            
  }
});

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}