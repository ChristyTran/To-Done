import { Component, Input, OnChanges } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  items: Item[];

  countUncompleted(items: Item[]): number{
    var countUncompleted = 0;

    for (var i=0; i<items.length; i++){
        if (!items[i].complete) countUncompleted++;
    }

    return countUncompleted;
  }
  constructor() { }
}
