import { Action } from '@ngrx/store';

export enum ServicesActionsTypes {
  GetAllServices = '[Services] Get All Services',
  AddMultiplesServices = '[Services] Add Multiples Services',
  AddServices = '[Services] Add Services',
  DeleteServices = '[Services] Delete Services',
  EditServices = '[Services] Edit Services'
}

export class GetAllServices implements Action {
  public readonly type = ServicesActionsTypes.GetAllServices;

  constructor(public payload: any) {}
}

export class AddMultiplesServices implements Action {
  public readonly type = ServicesActionsTypes.AddMultiplesServices;

  constructor(public payload: any) {}
}

export class AddServices implements Action {
  public readonly type = ServicesActionsTypes.AddServices;

  constructor(public payload: any) {}
}

export class DeleteServices implements Action {
  public readonly type = ServicesActionsTypes.DeleteServices;

  constructor(public id: any) {}
}

export class EditServices implements Action {
  public readonly type = ServicesActionsTypes.EditServices;

  constructor(public payload: any) {}
}

export type ServicesActions = GetAllServices | AddMultiplesServices | AddServices | DeleteServices | EditServices;
