import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from "@angular-mdl/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { NgxGalleryModule } from 'ngx-gallery';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { NgxAutoScrollModule} from "ngx-auto-scroll";

import { AppComponent } from './app.component';
import { ViewAuctionsComponent } from './home/view-auctions/view-auctions.component';
import { ItemAuctionComponent } from './home/item-auction/item-auction.component';
import { ProfileComponent } from './profile-view/profile/profile.component';
import { ItemViewComponent } from './active-item-view/item-view/item-view.component';
import { ProfileItemsComponent } from './profile-view/profile-items/profile-items.component';
import { ChatAuctionComponent } from './active-item-view/chat-auction/chat-auction.component';
import { ImgViewComponent } from './active-item-view/img-view/img-view.component';

const appRoutes:Routes = [
  { path: '', component: ItemAuctionComponent  },
  { path: 'perfil', component: ProfileComponent  },
  { path: 'mi-chachara', component: ProfileItemsComponent  },
  { path: 'chachara/:id', component: ItemViewComponent  },
]

var urlPort = process.env.PORT || "http://localhost:8988" ;

const config: SocketIoConfig = { url: urlPort, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ViewAuctionsComponent,
    ItemAuctionComponent,
    ProfileComponent,
    ItemViewComponent,
    ProfileItemsComponent,
    ChatAuctionComponent,
    ImgViewComponent,
  ],
  imports: [
    BrowserModule,
    MdlModule, 
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgxGalleryModule,
    SocketIoModule.forRoot(config),
    NgxAutoScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
