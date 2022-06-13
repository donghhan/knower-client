import { createContext, useState } from "react";

interface IPageToggleContext {
  toggleOpen: boolean;
  toggleWindowOpen?: () => void;
}

export const PageOpenToggleContext = createContext<Partial<IPageToggleContext>>(
  { toggleOpen: false }
);

export const PageOpenToggleProvider = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);

  const toggleWindowOpen = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <PageOpenToggleContext.Provider value={{ toggleOpen, toggleWindowOpen }}>
      {children}
    </PageOpenToggleContext.Provider>
  );
};
