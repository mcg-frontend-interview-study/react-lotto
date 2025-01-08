import * as S from './styles';

export interface InputStyleProps {
  $style?: React.CSSProperties;
}

interface InputProps extends InputStyleProps, React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ $style, ...rest }: InputProps) => {
  return <S.Input $style={$style} {...rest} />;
};

export default Input;
