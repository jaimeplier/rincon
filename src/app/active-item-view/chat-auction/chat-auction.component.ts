import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActiveItemService } from "../active-item.service";
import { SeedUser } from "../../seed-user.service";
import { ChatService } from "./chat-auction.service";

@Component({
  selector: 'app-chat-auction',
  templateUrl: './chat-auction.component.html',
  styleUrls: ['./chat-auction.component.css'],
  providers: [ActiveItemService, SeedUser, ChatService ]
})
export class ChatAuctionComponent implements OnInit {
  @ViewChild('inputBox') inputBox: ElementRef;

  constructor( private activeItem:ActiveItemService,
              private seedUser:SeedUser,
              private chatService: ChatService ) { }

  auction = this.activeItem.auction;
  displayTime;
  
  timeLeft = 430;
  timeToEnd;
  
  newBid = this.auction.last_bid + 1;
  messages2;

  // f() converts milisec to human readable
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
        (days ? days + ' días' : ""),
        ( hours ? hours + ' hr': ""),
        (minutes ? minutes + ' min' : ""),
        (seconds ? seconds + ' seg' : "")
    ].join(' ');
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
  
        this.chatService
        .getMessage()
        .subscribe(msg => {
          this.activeItem.pushBid(msg.bid);
          
          this.messages.push(
            {name: msg.user,
              text: msg.msg,
              puja: msg.bid
            })
          this.newBid = msg.bid + 1;
        });
      }


  pushBid(newBid, inputval) {
    inputval = inputval || "";
    const userName = this.seedUser.user.name;
    this.activeItem.pushBid(newBid)

    // on success push, update bid, then add to msgs
    this.messages.push({
      name: userName,
      text: inputval,
      puja: newBid
    });
    this.inputBox.nativeElement.value = "";
    this.newBid = this.auction.last_bid + 1;
    this.inputBox.nativeElement.focus();

    this.chatService.sendMessage(newBid, inputval, userName);
  }

  enterKey(newBid, inputVal) {
    this.pushBid(newBid, inputVal);
  }

  messages = [{
    name: 'asdsa',
    text: 'wasuuup! asdasdf asf sadfs dfs dfsd f sd fsd fs df df gd fgd fgd fg d fgd fgd f gd dgdhfghf fgh fghgf ',
    puja: 22
  }
]

}
