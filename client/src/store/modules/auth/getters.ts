import { IUser } from '@/models/user';
import { GetterTree } from 'vuex';
import { AuthGettersTypes, AuthStateTypes, IRootState } from '../../interfaces';

export const getters: GetterTree<AuthStateTypes, IRootState> &
  AuthGettersTypes = {
  currentUser(state: AuthStateTypes): IUser | null {
    return state.currentUser;
  },
};
