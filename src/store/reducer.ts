import { ServicesActions, ServicesActionsTypes } from './actions';
import { ServiceItem } from '../shared/model';

const initialState = [];

export function reducer(state = initialState, action: ServicesActions) {
  switch (action.type) {
    case ServicesActionsTypes.GetAllServices:
      return action.payload;
    case ServicesActionsTypes.AddMultiplesServices:
      return [].concat(state, action.payload);
    case ServicesActionsTypes.AddServices:
      debugger;
      return [...state, action.payload];
    default:
      return state;
  }
}
