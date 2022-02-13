export type OmitBaseFieldProps<T> = Omit<
  T,
  | 'status'
  | 'feedbackClass'
  | 'message'
  | 'formHandlerOnChange'
  | 'formHandlerOnInput'
  | 'formHandlerOnSelect'
  | 'formHandlerOnClear'
>;
