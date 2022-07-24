import React, { createContext, useContext, useState } from "react";

interface ActiveSectionCtxType {
  activeSection: string | undefined;
  changeActiveSection: (_: string) => void;
}

const ActiveSectionCtx = createContext<ActiveSectionCtxType>({
  activeSection: "#home",
  changeActiveSection: () => {},
});

const ActiveSectionProvider: React.FC = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string | undefined>();

  const changeActiveSection = (url: string) => {
    const el = document.querySelector(url);
    el?.scrollIntoView();
    window.scrollBy(0, -80);
    if (url !== activeSection || !activeSection) {
      setActiveSection(url);
    }
  };

  return (
    <ActiveSectionCtx.Provider value={{ activeSection, changeActiveSection }}>
      {children}
    </ActiveSectionCtx.Provider>
  );
};

export default ActiveSectionProvider;

export const useActiveSection = () => {
  const activeSectionCtx = useContext(ActiveSectionCtx);

  if (!activeSectionCtx) {
    throw new Error(
      "useActiveSection must be used within the ActiveSectionProvider"
    );
  }

  return activeSectionCtx;
};
