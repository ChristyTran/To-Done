import { Component } from '@angular/core';
import { Item } from './item';
import { ScaffoldDataService } from './scaffold-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

    constructor(private todoDataService: ScaffoldDataService) {
    }

    onAddItem(item: Item){
      this.todoDataService.addItem(item);
    }

    onToggleItemComplete(item) {
      this.todoDataService.toggleItemComplete(item);
    }

    onRemoveItem(item) {
      this.todoDataService.deleteItemById(item.id);
    }

    get items() {
      return this.todoDataService.getAllItems();
    }
}
