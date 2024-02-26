// Обработчик события для кнопки "Влево"
document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentPosition < 0) {
      currentPosition += 100; // Измените значение сдвига по вашему усмотрению
      sliderContainer.style.transform = translateX(${currentPosition}px);
    }
  });
  
  // Обработчик события для кнопки "Вправо"
  document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentPosition > -200) { // Измените значение сдвига по вашему усмотрению
      currentPosition -= 100;
      sliderContainer.style.transform = translateX(${currentPosition}px);
    }
  });

