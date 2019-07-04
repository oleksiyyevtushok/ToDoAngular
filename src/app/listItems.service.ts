import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListItemsService {
  currentList: string[] = [];
  getList(): string[] {
    return this.currentList;
  }

  addToList(item: string): void {
    this.currentList.unshift(item);
  }
}
