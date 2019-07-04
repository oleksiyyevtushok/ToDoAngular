import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../listItems.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private listItemsService: ListItemsService) {}
  listItems: string[] = this.listItemsService.getList();
  ngOnInit() {}
}
