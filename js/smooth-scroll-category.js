const buttonsAudience = document.querySelectorAll('.audience-item');

buttonsAudience.forEach(button => {
  const target = button.dataset.target;
  button.addEventListener('click', () => {
    const section = document.querySelector(`#${target}`);
    const yOffset = -160; // set the vertical offset
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scroll({top: y, behavior: 'smooth'});
  });
});