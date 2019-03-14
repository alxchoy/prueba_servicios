import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
      <div class="card-footer">
        <a href="javascript:void(0)" class="card-link" (click)="editService($event)">Editar</a>
        <a href="javascript:void(0)" class="card-link" (click)="deleteService($event)">Eliminar</a>
      </div>
    </div>
  `,
  styles: ['.card { height: 200px; }']
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() {}

  deleteService() {
    this.onDelete.emit();
  }

  editService() {
    this.onEdit.emit();
  }
}
