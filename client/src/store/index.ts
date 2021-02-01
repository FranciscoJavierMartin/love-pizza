import { createStore, useStore as VuexStore } from 'vuex';
import { IRootState } from '@/store/interfaces';
import { AuthStoreModuleTypes } from './modules/auth/types';

import root from './modules/root';

export const store = createStore<IRootState>(root);

type StoreModules = {
  auth: AuthStoreModuleTypes;
};

export type Store = AuthStoreModuleTypes<Pick<StoreModules, 'auth'>>;

export function useStore(): Store {
  return VuexStore() as Store;
}
