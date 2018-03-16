import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from "@angular-mdl/core";

import { AppComponent } from './app.component';
import { ViewAuctionsComponent } from './view-auctions/view-auctions.component';
import { ItemAuctionComponent } from './item-auction/item-auction.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewAuctionsComponent,
    ItemAuctionComponent
  ],
  imports: [
    BrowserModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
