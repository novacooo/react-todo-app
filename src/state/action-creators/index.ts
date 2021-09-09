import { Dispatch } from 'redux';
import { IThemeType } from 'theme';
import { ActionType } from 'state/action-types';
import { ISwitchThemeAction } from 'state/actions';

export const switchTheme = (theme: IThemeType) => {
  return (dispatch: Dispatch<ISwitchThemeAction>): void => {
    dispatch({
      type: ActionType.SWITCH_THEME,
      payload: theme,
    });
  };
};
