import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.scss'
})
export class CrudTableComponent {

  @Input() title!: string;
  @Input() columns: Array<{ field: string, header: string }> = [];
  @Input() data: any[] = [];

  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();


  onAdd() {
    this.add.emit();
  }

  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(item: any) {
    this.delete.emit(item);
  }


}
