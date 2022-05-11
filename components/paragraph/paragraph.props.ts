import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}
