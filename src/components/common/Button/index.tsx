import * as S from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Button = ({ onClick, children, $style, ...rest }: ButtonProps) => {
  return (
    <S.Button type="button" onClick={onClick} $style={$style} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
