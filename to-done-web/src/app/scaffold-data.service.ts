import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ScaffoldDataService {
  lastId: number = 0;

  items: Item[] = [];

  constructor() { }

  // Placeholder for POST
  addItem(item: Item): ScaffoldDataService {
    if (!item.id) {
      item.id = ++this.lastId;
    }

    this.items.push(item);
    return this;
  }

  // Placeholder for DELETE
  deleteItemById(id: number): ScaffoldDataService {
    this.items = this.items
    .filter(item => item.id !== id);

    return this;
  }

  // Placeholder for PUT
  updateItemById(id: number, values: Object = {}): Item {
    let item = this.getItemById(id);
    if (!item) {
      return null;
    }
    Object.assign(item, values);
    return item;
  }

  // Placeholder GET
  getAllItems(): Item[]{
    return this.items;
  }

  // Placeholder GET
  getItemById(id: number): Item{
    return this.items
    .filter(item => item.id === id)
    .pop();
  }

  toggleItemComplete(item: Item){
    let updatedItem = this.updateItemById(item.id, {
        complete: !item.complete
    });

    return updatedItem;
  }
}
