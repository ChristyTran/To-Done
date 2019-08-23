import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  items: Item[];

  constructor() { }

}
