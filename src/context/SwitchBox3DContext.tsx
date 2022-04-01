import { createContext, ReactNode, useState } from "react";

type SwitchBox3DProviderProps = {
  children: ReactNode;
};

interface SwitchBox3DContextProps {
  isChecked: boolean;
  handleIsChecked: () => void;
}

export const SwitchBox3DContext = createContext({} as SwitchBox3DContextProps);

export function SwitchBox3DProvider({ children }: SwitchBox3DProviderProps) {
  const [isChecked, setIsCHecked] = useState(false);

  function handleIsChecked() {
    setIsCHecked(!isChecked);
  }
  
  return (
    <SwitchBox3DContext.Provider value={{ isChecked, handleIsChecked }}>
      {children}
    </SwitchBox3DContext.Provider>
  );
}
