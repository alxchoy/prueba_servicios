import { createSelector } from '@ngrx/store';

import { AppState } from './state';

import * as allActions from './actions';

export const servicesActions = allActions;

const selectItem = (state: AppState) => state.services;
const getServicesByCategory = category =>
  createSelector(
    selectItem,
    list => list.filter(item => item.category === category)
  );

export const servicesSelectors = {
  getServicesByCategory
};
