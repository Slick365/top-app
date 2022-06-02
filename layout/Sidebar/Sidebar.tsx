import { SidebarProps } from './Sidebar.props';
import style from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from './Logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, style.sidebar)} {...props}>
      <Logo className={style.logo} />
      <div>Search</div>
      <Menu />
    </div>
  );
};
