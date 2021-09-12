import { THEME_TRANSITION_TIME, THEME_TRANSITION_CLASS } from 'app_constants';

export const toggleTransitionClass = (): void => {
  const htmlClassList = document.documentElement.classList;
  htmlClassList.add(THEME_TRANSITION_CLASS);
  setTimeout(() => htmlClassList.remove(THEME_TRANSITION_CLASS), THEME_TRANSITION_TIME);
};
