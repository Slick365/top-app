import { TagProps } from './Tag.props';
import style from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size = 'm',
  children,
  className,
  color = 'ghost',
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(style.tag, className, {
        [style.m]: size == 'm',
        [style.l]: size == 'l',
        [style.ghost]: color == 'ghost',
        [style.red]: color == 'red',
        [style.gray]: color == 'gray',
        [style.green]: color == 'green',
        [style.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
