import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  constructor() { }
  // Make http call to get item from router and set it as this.item

  ngOnInit() {
  }

}
