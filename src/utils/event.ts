export const emit = (target: HTMLElement, eventName: string, detail?: object) =>
  target.dispatchEvent(new CustomEvent(eventName, detail));
