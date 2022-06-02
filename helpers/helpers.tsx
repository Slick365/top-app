import CoursesIcon from '../helpers/icons/courses.svg';
import ServicesIcon from '../helpers/icons/services.svg';
import ProductsIcon from '../helpers/icons/products.svg';
import BooksIcon from '../helpers/icons/books.svg';
import { TopLevelCategory } from '../interfaces/top-page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Courses',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Services',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'products',
    name: 'Products',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Books',
    icon: <BooksIcon />,
    id: TopLevelCategory.Courses,
  },
];
