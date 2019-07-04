import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  constructor() {}
  @Input() task: string;
  isDone: boolean = false;
  ngOnInit() {}

  onClick(): void {
    this.isDone = true;
  }
}
