import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import {AppOne, FavouritesComponent} from './favourites.component';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    FavouritesComponent,
    AppOne
  ],
    imports: [
        CommonModule,
        FavouritesRoutingModule,
        MatToolbarModule
    ]
})
export class FavouritesModule { }
