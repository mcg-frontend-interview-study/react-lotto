export type InputGroupProps = React.ComponentProps<'input'> & {
  label: string;
  length: number;
  style?: InputGroupStyleProps;
};

export type InputGroupStyleProps = {
  gap?: number;
  justifyContent?: string;
  textAlign?: string;
  inputWidth?: number;
};
