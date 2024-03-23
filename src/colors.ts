export function setupColors(bodyElement: HTMLBodyElement) {
  const toggleColor = () => {
    bodyElement.style.backgroundColor =
      bodyElement.style.backgroundColor === 'rgb(255, 236, 179)' ? 'rgb(255, 0, 0)' : 'rgb(255, 236, 179)';
  };
  bodyElement.addEventListener('dblclick', () => toggleColor());
}
