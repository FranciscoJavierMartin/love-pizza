import { ActionContext } from 'vuex';
import { MutationTypes as AuthMTypes } from './modules/auth/mutation-types';
import { ActionTypes as AuthATypes } from './modules/auth/action-types';
import { IAuthUser } from '@/models/user';
import { IUserFormLogin, IUserFormRegister } from '@/interfaces/forms';

export interface IRootState {}

export interface IMergedState extends IRootState {
  authModule: AuthStateTypes;
}

export interface IRootGettersTypes {}

export type RootMutationsTypes<S = IRootState> = {};

type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1],
  ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, 'commit'>;

export interface RootActionsTypes {}

// Auth module types

export interface AuthStateTypes {
  currentUser: IAuthUser | null;
}

export interface AuthGettersTypes {
  currentUser(state: AuthStateTypes): IAuthUser | null;
}

export type AuthMutationsTypes<S = AuthStateTypes> = {
  [AuthMTypes.SET_CURRENT_USER](state: S, payload: IAuthUser | null): void;
};

type AugmentedActionContextAuth = {
  commit<K extends keyof AuthMutationsTypes>(
    key: K,
    payload: Parameters<AuthMutationsTypes[K]>[1],
  ): ReturnType<AuthMutationsTypes[K]>;
} & Omit<ActionContext<AuthStateTypes, IRootState>, 'commit'>;

export interface AuthActionsTypes {
  [AuthATypes.LOGIN_USER](
    { commit }: AugmentedActionContextAuth,
    payload: IUserFormLogin,
  ): void;
  [AuthATypes.REGISTER_USER](
    { commit }: AugmentedActionContextAuth,
    payload: IUserFormRegister,
  ): void;
  [AuthATypes.SET_CURRENT_USER](
    { commit }: AugmentedActionContextAuth,
    payload: IAuthUser,
  ): void;
}

export interface StoreActions extends AuthActionsTypes {}

export interface StoreGetters extends AuthGettersTypes {}
