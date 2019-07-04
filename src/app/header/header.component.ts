import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../listItems.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private listItemsService: ListItemsService) {}

  inputValue: string = '';
  ngOnInit() {}
  btnClick(): void {
    this.listItemsService.addToList(this.inputValue);
    this.inputValue = '';
  }
}
