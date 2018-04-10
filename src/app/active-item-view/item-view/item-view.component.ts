import { Component, OnInit } from '@angular/core';
import { ActiveItemService } from "../active-item.service";

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css'],
  providers: [ActiveItemService]
})
export class ItemViewComponent implements OnInit {

  constructor( private activeItem:ActiveItemService ) { }
  // Make http call to get item from router and set it as this.item
  auction = this.activeItem.auction;

  ngOnInit() {
    console.log(this.auction.end_time)
  }

}
