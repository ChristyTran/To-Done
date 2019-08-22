import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  items: Item[];

  @Output()
  remove: EventEmitter<Item> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Item> = new EventEmitter();

  onToggleItemComplete(item: Item){
    this.toggleComplete.emit(item);
  }

  onRemoveItem(item: Item){
    this.remove.emit(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
