console.log('panels.js loaded');
const panels = document.querySelectorAll('.panel')
const panelsArray = Array.from(panels)

panelsArray.forEach((panel) => {
  panel.addEventListener('click', (event) => {

    // Making Panels bigger by adding the toggling open/closed classes
    panelsArray.forEach((otherPanel) => {
      if (otherPanel !== event.currentTarget) {
        let hiddenTextElements = otherPanel.querySelectorAll('p.top')

        otherPanel.classList.remove('open')
        hiddenTextElements.forEach(elem => elem.classList.add('hidden'));
      } else {
        let hiddenTextElements = panel.querySelectorAll('p.hidden')

        event.currentTarget.classList.toggle('open');
        hiddenTextElements.forEach(elem => elem.classList.remove('hidden'));
      }
    });
  });
});
