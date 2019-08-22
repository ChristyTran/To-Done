import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() item: Item;

  @Output()
  remove: EventEmitter<Item> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Item> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(item: Item) {
    this.toggleComplete.emit(item);
  }

  removeItem(item: Item) {
    this.remove.emit(item);
  }

}
