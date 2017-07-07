const spacingInputElement = document.querySelector('input[name=spacing]'),
      blurInputElement = document.querySelector('input[name=blur]'),
      colorInputElement = document.querySelector('input[name=base_color]');

const htmlElement = document.querySelector('html');

spacingInputElement.addEventListener('input', function(e) {
  htmlElement.style.setProperty('--spacing', e.target.value + 'px');
});

blurInputElement.addEventListener('input', function(e) {
  htmlElement.style.setProperty('--blur', e.target.value + 'px');
});

colorInputElement.addEventListener('input', function(e) {
  htmlElement.style.setProperty('--base-color', e.target.value);
});

