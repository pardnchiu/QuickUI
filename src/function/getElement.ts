function getElement(text: string): HTMLElement | null {
  if (text.startsWith("#")) {
    return document.getElementById(text.substring(1));
  } else if (/[\.\[\]]/.test(text)) {
    return document.querySelector(text);
  }
  return document.getElementById(text) || document.querySelector(text);
}

window.$ = getElement;
