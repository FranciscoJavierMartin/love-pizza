import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { AuthMutationsTypes, AuthStateTypes } from '../../interfaces';
import { IAuthUser } from '@/models/user';
import { JWT_LOCALSTORAGE } from '../../../constants/common';

export const mutations: MutationTree<AuthStateTypes> & AuthMutationsTypes = {
  [MutationTypes.SET_CURRENT_USER](
    state: AuthStateTypes,
    payload: IAuthUser | null,
  ): void {
    state.currentUser = payload;
    if (payload) {
      localStorage.setItem(JWT_LOCALSTORAGE, JSON.stringify(payload));
    } else {
      localStorage.removeItem(JWT_LOCALSTORAGE);
    }
  },
};
