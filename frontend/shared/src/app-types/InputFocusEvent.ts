export type InputFocusEvent = FocusEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};
