import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  newItem: Item = new Item();

  @Output()
  add: EventEmitter<Item> = new EventEmitter();

  addItem(){
    this.add.emit(this.newItem);
    this.newItem = new Item();
  }
  constructor() { }

}
