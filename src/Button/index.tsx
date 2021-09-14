import React from 'react';
import './index.css';
import { tuple } from '@/_util/type';
import { SizeType } from '@/config-provider/SizeContext';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text',
);
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'round');
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

interface ButtonOptions {
  title: string;
  href: string;
  onClick: () => void;
}

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

export type ButtonProps = Partial<BaseButtonProps & ButtonOptions>;

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref,
) => {
  const { href, onClick, title } = props;
  return (
    <a className="light-btn" href={href} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {title}
    </a>
  );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export default Button;
