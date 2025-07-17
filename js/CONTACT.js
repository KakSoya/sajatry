document.querySelectorAll('.form-item input, .form-item textarea').forEach(input => {
  const label = input.parentElement.querySelector('label');

  input.addEventListener('focus', () => {
    label.style.top = '-10px';
    label.style.fontSize = '12px';
    label.style.color = 'black';
  });

  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      if (input.tagName.toLowerCase() === 'textarea') {
        label.style.top = '75%';
      } else {
        label.style.top = '50%';
      }
      label.style.fontSize = '16px';
      label.style.color = 'grey';
    }
  });
});