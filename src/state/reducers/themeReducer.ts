import { ActionType } from 'state/action-types';
import { ISwitchThemeAction } from 'state/actions';
import { appThemes, IThemeType } from 'theme';

const initialState: IThemeType = appThemes.light.blue;

const themeReducer = (state = initialState, action: ISwitchThemeAction): IThemeType => {
  switch (action.type) {
    case ActionType.SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
