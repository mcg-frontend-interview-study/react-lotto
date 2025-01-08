import * as Styled from './Button.style';

type ButtonProps = React.ComponentProps<'button'>;

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <Styled.Button {...buttonProps}>{children}</Styled.Button>;
};
