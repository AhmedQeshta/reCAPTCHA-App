import { LoadingButton } from '@mui/lab';
import { IButtonProps } from '../../utils';

const Button = ({ children, ...restProps }: IButtonProps) => {
  return <LoadingButton {...restProps}>{children}</LoadingButton>;
};

// set default props
Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  loading: false,
  loadingIndicator: 'Loading...',
  disabled: false,
  fullWidth: true,
  size: 'medium',
  type: 'submit',
};

export default Button;
