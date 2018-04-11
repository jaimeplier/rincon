import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';

@Injectable()
export class ChatService {

    constructor(private socket: Socket) {}

    getMessage() {
        return this.socket
            .fromEvent<any>("msg")
            .map(data => data);
    }

    sendMessage(bid: number, msg: string, user: string) {
        this.socket
            .emit("msg", {
                msg: msg,
                bid: bid,
                user: user
            });

/*         
        Add socket to join room
this.socket.
 */    
    }
}