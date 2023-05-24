import { ReactNode, createContext, useState, Dispatch, SetStateAction} from "react";


export interface ContextProps {
    children: ReactNode;
}

export interface createContextProps{
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
}

export const User_data = createContext<createContextProps>({ username: "", setUsername: () => {}});

function Context({ children }: ContextProps) {
  const [username, setUsername] = useState("");

  return (
    <User_data.Provider value={{ username, setUsername }}>
      {children}
    </User_data.Provider>
  );
}
export default Context;
