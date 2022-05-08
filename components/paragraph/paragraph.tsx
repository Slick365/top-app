import { ParagraphProps } from './paragraph.props';
import style from './paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
  size = 'm',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(style.p, className, {
        [style.s]: size == 's',
        [style.m]: size == 'm',
        [style.l]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
