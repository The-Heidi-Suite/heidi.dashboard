import { StateCreator } from 'zustand';

import { RoleValue } from '@/lib/constant';

type UserSliceState = {
  name: string;
  lastName: string;
  role?: RoleValue;
};

type UserSliceActions = {
  setUserData: (userData: UserSliceState) => void;
  resetUserData: () => void;
};

export type UserSlice = UserSliceState & UserSliceActions;

const INITIAL_DATA: UserSliceState = {
  lastName: '',
  name: '',
  role: undefined,
};
const createUserSlice: StateCreator<UserSlice> = (set) => ({
  ...INITIAL_DATA,
  resetUserData: () => {
    set(INITIAL_DATA);
  },
  setUserData: (userData) => {
    set(userData);
  },
});

// Selectors
export const selectUserName = (state: UserSlice) => state.name;
export const selectLastName = (state: UserSlice) => state.lastName;
export const selectUserRole = (state: UserSlice) => state.role;

// Actions
export const resetUserDataAction = (state: UserSlice) => state.resetUserData;
export const setUserDataAction = (state: UserSlice) => state.setUserData;

export default createUserSlice;
