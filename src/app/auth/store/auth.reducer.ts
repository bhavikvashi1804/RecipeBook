import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { email, userId, token, expirationDate }) => {
    let userData = new User(email, userId, token, expirationDate);
    return {
      ...state,
      user: userData,
    };
  }),
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);
