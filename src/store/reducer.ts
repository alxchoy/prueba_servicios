import { ServicesActions, ServicesActionsTypes } from './actions';

const initialState = [];

export function reducer(state = initialState, action: ServicesActions) {
  switch (action.type) {
    case ServicesActionsTypes.GetAllServices:
      return action.payload;
    case ServicesActionsTypes.AddMultiplesServices:
      return [].concat(state, action.payload);
    case ServicesActionsTypes.AddServices:
      return [...state, action.payload];
    case ServicesActionsTypes.DeleteServices:
      return state.filter(service => service.id !== action.id);
    case ServicesActionsTypes.EditServices:
      return state.map(service => (service.id === action.payload.id ? action.payload : service));
    default:
      return state;
  }
}
