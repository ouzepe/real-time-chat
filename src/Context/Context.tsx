import { ReactNode, createContext, useState, Dispatch, SetStateAction} from "react";


export interface ContextProps {
    children: ReactNode;
}

export interface createContextProps{
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
}

export const User = createContext<createContextProps>({ username: "", setUsername: () => {}});

function Context({ children }: ContextProps) {
  const [username, setUsername] = useState("");

  return (
    <User.Provider value={{ username, setUsername }}>
      {children}
    </User.Provider>
  );
}
export default Context;
