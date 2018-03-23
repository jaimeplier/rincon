import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from "@angular-mdl/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ViewAuctionsComponent } from './view-auctions/view-auctions.component';
import { ItemAuctionComponent } from './item-auction/item-auction.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ProfileItemsComponent } from './profile-items/profile-items.component';

const appRoutes:Routes = [
  { path: '', component: ItemAuctionComponent  },
  { path: 'perfil', component: ProfileComponent  },
  { path: 'mi-chachara', component: ProfileItemsComponent  },
  { path: ':id', component: ItemViewComponent  },
]

@NgModule({
  declarations: [
    AppComponent,
    ViewAuctionsComponent,
    ItemAuctionComponent,
    ProfileComponent,
    ItemViewComponent,
    ProfileItemsComponent,
  ],
  imports: [
    BrowserModule,
    MdlModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
