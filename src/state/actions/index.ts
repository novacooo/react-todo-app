import { ActionType } from 'state/action-types';
import { IThemeType } from 'theme';

export interface ISwitchThemeAction {
  type: ActionType.SWITCH_THEME;
  payload: IThemeType;
}
