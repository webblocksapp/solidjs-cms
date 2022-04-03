export type OmitBaseFieldProps<T> = Omit<
  T,
  | 'status'
  | 'feedbackClassList'
  | 'message'
  | 'formHandlerOnChange'
  | 'formHandlerOnInput'
  | 'formHandlerOnSelect'
  | 'formHandlerOnClear'
  | 'formHandlerOnBlur'
  | 'formHandlerOnClose'
  | 'setValue'
>;
