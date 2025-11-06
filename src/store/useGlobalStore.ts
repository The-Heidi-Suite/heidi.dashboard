import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { BROWSER_STORAGE_KEYS } from '@/config/browser';
import { deleteCompleteBrowserStorage } from '@/lib/browserStorage';

import createUserSlice, { UserSlice } from './slices/userSlice';

// Extend GlobalState with other slices
type RootState = UserSlice & {
  reset: () => void;
};

export const useGlobalStore = create<RootState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      reset: () => {
        deleteCompleteBrowserStorage();
        a[0](() => ({
          ...createUserSlice(...a),
        }));
      },
      // ...add more slices
    }),
    {
      name: BROWSER_STORAGE_KEYS.GLOBAL_STORE,
    }
  )
);
