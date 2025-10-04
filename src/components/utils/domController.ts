// domController.ts

// grab element by ID safely
export function getById<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element with ID "${id}" not found`);
  return el as T;
}

// change text
export function setText(id: string, text: string) {
  const el = getById<HTMLElement>(id);
  el.innerText = text;
}

// add class
export function addClass(id: string, className: string) {
  const el = getById<HTMLElement>(id);
  el.classList.add(className);
}

// remove class
export function removeClass(id: string, className: string) {
  const el = getById<HTMLElement>(id);
  el.classList.remove(className);
}

// attach click
export function onClick(id: string, handler: () => void) {
  const el = getById<HTMLElement>(id);
  el.addEventListener("click", handler);
}
