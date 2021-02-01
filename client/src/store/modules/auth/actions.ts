import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { AuthActionsTypes, AuthStateTypes, IRootState } from '../../interfaces';
import { IAuthUser } from '@/models/user';
import { IUserFormLogin, IUserFormRegister } from '@/interfaces/forms';
import agent from '../../../api/agent';
import { JWT_LOCALSTORAGE } from '../../../constants/common';

export const actions: ActionTree<AuthStateTypes, IRootState> &
  AuthActionsTypes = {
  [ActionTypes.LOGIN_USER]({ commit }, payload: IUserFormLogin) {
    agent.User.login(payload).then((user: IAuthUser) => {
      localStorage.setItem(JWT_LOCALSTORAGE, JSON.stringify(user));
      commit(MutationTypes.SET_CURRENT_USER, user);
    });
  },
  [ActionTypes.REGISTER_USER]({ commit }, payload: IUserFormRegister) {
    agent.User.register(payload).then((user: IAuthUser) => {
      localStorage.setItem(JWT_LOCALSTORAGE, JSON.stringify(user));
      commit(MutationTypes.SET_CURRENT_USER, user);
    });
  },
  [ActionTypes.SET_CURRENT_USER]({ commit }, payload: IAuthUser) {
    commit(MutationTypes.SET_CURRENT_USER, payload);
  },
};
