import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { RoomsComponent } from './components/rooms.component';
import { SpotComponent } from './components/spot.component';
import { RoomSpotComponent } from './components/roomSpot.component';
*/

import { GameComponent } from './components/game.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
/*
const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
    { path: 'rooms', component: RoomsComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },

   { path: 'rooms/:id', component: RoomSpotComponent }
];
*/
const routes: Routes = [
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: 'credentials', component: CredentialsComponent },
    { path: 'game', component: GameComponent }
    //,

  //{ path: 'tutorials', component: TutorialsListComponent },
  //{ path: 'tutorials/:id', component: TutorialDetailsComponent },
  //{ path: 'add', component: AddTutorialComponent },

  // { path: 'rooms/:id', component: RoomSpotComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
