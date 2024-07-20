import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer, { OpenNav } from "./mobile_nav_state";

export interface RootState {
  openNav: OpenNav;
}
export const store = configureStore<RootState>({
  reducer: {
    openNav: mobileNavReducer,
    // tambahkan reducer lain di sini jika diperlukan
  },
});
