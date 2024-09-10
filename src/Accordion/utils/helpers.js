export function formatTwoDigitNum(num) {
  const isDigit = num < 10;
  return isDigit ? num.toString().padStart(2, 0) : num;
}

export function isHeadingElement(element) {
  return element instanceof HTMLHeadingElement;
}

export function isParagrapElement(element) {
  return element instanceof HTMLParagraphElement;
}

export function isListElement(element) {
  return (
    element instanceof HTMLUListElement || element instanceof HTMLOListElement
  );
}
