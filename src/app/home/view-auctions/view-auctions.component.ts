import { Component, OnInit } from '@angular/core';

import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-auctions',
  templateUrl: './view-auctions.component.html',
  styleUrls: ['./view-auctions.component.css']
})

export class ViewAuctionsComponent implements OnInit {
  constructor(private http: Http) { }
  
  ngOnInit() {
  }

  user = {
    fname: "John",
    lname: "Doe"
  } 

  addChachara() {
    console.log("ehhh...")
      /* console.log(this.http.get("/api").map(res => res.json)) */
       let link = "http://api.musicgraph.com/api/v2/artist/suggest?api_key=c8303e90962e3a5ebd5a1f260a69b138&prefix=king&genre=blues&limit=3";
/*       let link = "google.com"
 */

let li = "https://graph.facebook.com/v2.12/me?fields=id%2Cname&access_token=EAACEdEose0cBAJOvMRa9Abcvk5R6pWYl1eHiCG4ZBiN2DTlbtm4ZAp2LAhpOHYPxostqYacGjBwZBnzbMAvypfwscSC8KrozvbX0KO4fdVy0CyDu2yNZBogh0mEXWZCbIwNNhp9r3GdgqVVD89GcegLLxhmCYJuIsqadiXm8c1DZALpDSYfLeCZAXHPh3dL0BkZD"

      /* this.http.get("/api/foo").map(res => { */
       this.http.get("api").subscribe(res => {
          console.log(res)
        })
    
  }

}
