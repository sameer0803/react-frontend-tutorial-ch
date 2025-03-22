

export const TodoContext = createContext();

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}



