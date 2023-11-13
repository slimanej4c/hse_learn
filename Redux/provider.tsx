"use client";

import { store  } from "./store";
import { Provider } from "react-redux";

export function Provide_redux({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>   
    
    {children}

    </Provider>;
}
