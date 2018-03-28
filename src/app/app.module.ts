import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from "@angular-mdl/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { ViewAuctionsComponent } from './view-auctions/view-auctions.component';
import { ItemAuctionComponent } from './item-auction/item-auction.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ProfileItemsComponent } from './profile-items/profile-items.component';
import { ChatAuctionComponent } from './chat-auction/chat-auction.component';
import { ImgViewComponent } from './img-view/img-view.component';

const appRoutes:Routes = [
  { path: '', component: ItemAuctionComponent  },
  { path: 'perfil', component: ProfileComponent  },
  { path: 'mi-chachara', component: ProfileItemsComponent  },
  { path: 'chachara/:id', component: ItemViewComponent  },
]

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
