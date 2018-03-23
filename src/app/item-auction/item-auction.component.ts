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
    {title: "Title1",desc:"This is some title desc.", distance: 234 , end_time: 10 , img_src: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29425593_1638750719541108_538972813735932761_n.jpg?_nc_cat=0&oh=d5d48d1bf107b96e54e84596029fba4a&oe=5B2EBA3B"},
    {title: "Title2",desc:"This is some title desc.", distance: 234 , end_time: 15 , img_src: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29365931_2131201533782638_514707411873824768_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFH_guwlo-7vPVrsFfiEijetjI6tlf-Ho9-HhpvI8jJHgzdwmhUJiUTbt8i39vM4IQUMFLxsz9TIn60HgZBl5xl_Ya4ZjSTavPrWIvztxydIg&oh=d13be51d2e245a37e62d1f7abccd5cf4&oe=5B74CFEB"},
    {title: "Title3",desc:"This is some title desc.", distance: 234 , end_time: 16 , img_src: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29468446_10156041242430867_2295655325312745472_n.jpg?_nc_eui2=v1%3AAeEor45ZFdjJwOZk2n-7FQTPzGdhsJ5gFSQZlDdbf8z8QZxPRDrmSzRoIsbZR6hbzicuvMcfG2QBaOlcSoep41EzeLzCs3oZ4Fu96cNCHhIGjw&oh=a36f2f357e65f464488836906dff1728&oe=5B497561"},
    {title: "Title4",desc:"This is some title desc.", distance: 234 , end_time: 8 , img_src: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29425893_10156041233710867_6991024486535397376_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFQJP13QbWDoalpJ4yCPFD-Z5vgp6NcS9dt9hdc43cZ572K64Asm5LUB9J6OlbFpIwksrJIzlmIoj1uh_CWGRop1QhpFiqbNpfIYENN5E_mHA&oh=149bb34bd4e48648211e3318336e87fb&oe=5B46BEFC"}, 
    {title: "Title5",desc:"This is some title desc.", distance: 234 , end_time: 18 , img_src: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29386952_1124022414405030_6178971158705078272_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeE8d89G-Nrql3UPh70G16cGvpPeTVE1xYmo7ZpKQ_CMBCQFcZDsNooqdxkCyzC-nHJY0Utdylcw55ilZtLmveadocYiOcwtm-9zN3y8tKmNAA&oh=f50db899f10797ff3ee3edc5f7d128ab&oe=5B319F6A"},
    {title: "Title6",desc:"This is some title desc.", distance: 234 , end_time: 20 , img_src: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29496949_10215438535373744_7943261110205939712_n.jpg?_nc_eui2=v1%3AAeHFDNnl5tVP-XLgi5IA2io0x5lj8mAKvw78vSUV5N3Hmh4uWP5oklydUbxW4WGOWxqgzZtP4cTa0JlBjN2J3fu-as9rpQvGIqPyiyNWvrLfhw&oh=b850dca5b0b8e9b54c06060a8ff7901e&oe=5B499DC7"}
  ]

}