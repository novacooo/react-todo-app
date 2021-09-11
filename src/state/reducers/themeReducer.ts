import { ActionType } from 'state/action-types';
import { ISwitchThemeAction } from 'state/actions';
import { themes, IThemeType } from 'theme';

const initialState: IThemeType = themes.light.blue;

const themeReducer = (state = initialState, action: ISwitchThemeAction): IThemeType => {
  switch (action.type) {
    case ActionType.SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
