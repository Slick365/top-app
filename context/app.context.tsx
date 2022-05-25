import { createContext, ReactNode, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/top-page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const TopAppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const TopAppContextProvider = ({
  menu,
  firstCategory,
  children,
}: IAppContext & {
  children: ReactNode;
}): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <TopAppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </TopAppContext.Provider>
  );
};
