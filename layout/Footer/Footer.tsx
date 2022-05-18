import { FooterProps } from './Footer.props';
import style from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, style.footer)} {...props}>
      <div>All rights reserved {format(new Date(), 'yyyy')}</div>
      <a href="#" target="_blank">
        Terms and Conditions
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </footer>
  );
};
