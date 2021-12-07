import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module')
      .then(m => m.FavouritesModule)
  },
  {path: '', redirectTo: 'favourites', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
