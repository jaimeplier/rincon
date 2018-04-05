import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat-auction',
  templateUrl: './chat-auction.component.html',
  styleUrls: ['./chat-auction.component.css']
})
export class ChatAuctionComponent implements OnInit {
  constructor() { }

  displayTime;

  endDate;

  timeLeft = 430;
  timeToEnd;

  dhms(t) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    if(hours === 0 && minutes === 0 && seconds === 0) {
      return "Subasta terminó"
    }

    return [
        (days ? days + ' Días' : ""),
        ( hours ? hours + ' hr': ""),
        (minutes ? minutes + ' min' : ""),
        (seconds ? seconds + ' seg' : "")
    ].join(' ');
}



  timeL(miliseconds) {

  }


  ngOnInit() {

    this.timeToEnd = setInterval(
        () => {

          this.timeLeft--;
          this. displayTime = this.dhms(this.timeLeft)
          if (this.timeLeft <= 0 ) {
            clearInterval(this.timeToEnd);
          }
        }, 1000)
    
  }

  messages = [{
    name: 'asdsa',
    text: 'wasuuup!',
    puja: 22
  }
]

}
