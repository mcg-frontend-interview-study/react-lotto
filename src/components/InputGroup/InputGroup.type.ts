export type InputGroupProps<T> = React.ComponentProps<'input'> & {
  label: string;
  length: number;
  maxLength?: number;
  style?: InputGroupStyleProps;
  handleInput: (value: T, index: number) => void;
};

export type InputGroupStyleProps = {
  gap?: number;
  justifyContent?: string;
  textAlign?: string;
  inputWidth?: number;
};
