import { createContext } from 'react';
import { Block } from '../data/block';

export const FrameworksContext = createContext<DataContext>({
  frameworks: [],
});

interface DataContext {
  frameworks: {
    name: string;
    data: {
      [key: string]: Block[];
    };
  }[];
}