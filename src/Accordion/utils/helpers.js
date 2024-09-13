export function formatTwoDigits(num) {
  const isDigit = num < 10;
  return isDigit ? num.toString().padStart(2, 0) : num;
}

export function isHeadingNode(element) {
  return element instanceof HTMLHeadingElement;
}

export function isParagraphNode(element) {
  return element instanceof HTMLParagraphElement;
}

export function isListNode(element) {
  return (
    element instanceof HTMLUListElement || element instanceof HTMLOListElement
  );
}
