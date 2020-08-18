import * as React from "react";


type ContextProps = {
    date: string
}

export const Context = React.createContext<Partial<ContextProps>>({});
