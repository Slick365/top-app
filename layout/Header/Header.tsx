import { HeaderProps } from './Header.props';
import style from './paragraph.module.css';
import cn from 'classnames';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};