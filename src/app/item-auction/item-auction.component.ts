import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-auction',
  templateUrl: './item-auction.component.html',
  styleUrls: ['./item-auction.component.css']
})
export class ItemAuctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  auctions = [
    {title: "Title1",desc:"This is some title desc.", distance: 234 , end_time: 10 },
    {title: "Title2",desc:"This is some title desc.", distance: 234 , end_time: 15 },
    {title: "Title3",desc:"This is some title desc.", distance: 234 , end_time: 16 },
    {title: "Title4",desc:"This is some title desc.", distance: 234 , end_time: 8 },
    {title: "Title5",desc:"This is some title desc.", distance: 234 , end_time: 18 },
    {title: "Title6",desc:"This is some title desc.", distance: 234 , end_time: 20 }
  ]

}
