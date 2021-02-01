import { Module } from 'vuex';
import { AuthStateTypes, IRootState } from '../../interfaces';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

const auth: Module<AuthStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default auth;
