import {createContext} from 'react';
import RootStore from './rootStore';

export const StoreContext = createContext(RootStore);
export const StoreProvider = StoreContext.Provider;
