import { ServicesActions, ServicesActionsTypes } from './actions';
import { ServiceItem } from './model';

const initialState = [];

export function reducer(state = initialState, action: ServicesActions) {
  switch (action.type) {
    case ServicesActionsTypes.GetAllServices:
      return action.payload;
    case ServicesActionsTypes.AddServices:
      return [...state, action.payload];
    default:
      return state;
  }
}
