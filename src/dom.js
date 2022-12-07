import Arrow from './assets/arrow.svg';

function updateArrows(direction) {
  const hiTemp = document.getElementById('high-temp');
  const lowTemp = document.getElementById('low-temp');
  const windDirection = document.getElementById('wind-direction');

  hiTemp.src = Arrow;
  lowTemp.src = Arrow;
  windDirection.src = Arrow;

  
}

export {updateArrows}
