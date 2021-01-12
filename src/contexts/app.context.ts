import { createContext } from 'react';

export const AppContext = createContext({
  settings: {
    theme: 'dark'
  },
  setSettings: () => { },
});