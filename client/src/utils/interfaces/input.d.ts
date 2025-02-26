import { ChangeEvent, FocusEvent } from 'react';

export interface IPropsInput {
  id: string;
  name: string;
  value: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  defaultValue?: string;
  helperText?: string | false | undefined;
  fullWidth ?: boolean;
}
