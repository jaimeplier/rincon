import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-auctions',
  templateUrl: './view-auctions.component.html',
  styleUrls: ['./view-auctions.component.css']
})
export class ViewAuctionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    fname: "John",
    lname: "Doe"
  } 

}
