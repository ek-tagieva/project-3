
document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentPosition < 0) {
      currentPosition += 100; 
      sliderContainer.style.transform = translateX(${currentPosition}px);
    }
  });
  

  document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentPosition > -200) { 
      currentPosition -= 100;
      sliderContainer.style.transform = translateX(${currentPosition}px);
    }
  });

