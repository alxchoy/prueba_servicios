import { Action } from '@ngrx/store';

export enum ServicesActionsTypes {
  GetAllServices = '[Services] Get All Services',
  GetAutoServices = '[Services] Get Auto Services',
  GetHomeServices = '[Services] Get Home Services',
  GetHealthServices = '[Services] Get Health Services',
  AddServices = '[Services] Add Services'
}

export class GetAllServices implements Action {
  public readonly type = ServicesActionsTypes.GetAllServices;

  constructor(public payload: any) {}
}

export class GetAutoServices implements Action {
  public readonly type = ServicesActionsTypes.GetAutoServices;

  constructor(public payload: any) {}
}

export class GetHomeServices implements Action {
  public readonly type = ServicesActionsTypes.GetHomeServices;

  constructor(public payload: any) {}
}

export class GetHealthServices implements Action {
  public readonly type = ServicesActionsTypes.GetHealthServices;

  constructor(public payload: any) {}
}

export class AddServices implements Action {
  public readonly type = ServicesActionsTypes.AddServices;

  constructor(public payload: any) {}
}

export type ServicesActions = GetAllServices | GetAutoServices | GetHomeServices | GetHealthServices | AddServices;
