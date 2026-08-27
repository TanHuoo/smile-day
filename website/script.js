document.documentElement.classList.add('js');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

// Content remains readable if a user jumps deep into the page or a browser restores scroll position.
window.setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach((element) => element.classList.add('visible'));
}, 1200);

const scenes = {
  cloudy: { background: 'linear-gradient(160deg,#e8f0f5,#f9fcff 55%,#dce8ef)' },
  sunny: { background: 'linear-gradient(160deg,#e7f6ff,#f9fcff 55%,#fff0cf)' },
  rainy: { background: 'linear-gradient(160deg,#c8ddea,#eef6fa 55%,#b9d0df)' }
};

document.querySelectorAll('.day-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.day-card').forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
    document.querySelector('.compare').style.background = scenes[card.dataset.scene].background;
  });
});

document.querySelectorAll('.days button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.days button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});
