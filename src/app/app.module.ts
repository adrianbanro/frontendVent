import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VideoComponent } from './components/video.component';
import { TutorialComponent } from './components/tutorial.component';
import { GameComponent } from './components/game.component';
import { LeftSideMenuComponent } from './components/leftSideMenu.component';
import { SideMenuComponent } from './components/sideMenu.component';
import {CredentialsComponent} from './components/credentials/credentials.component';
import {CredentialsComponent66} from './components/credentials.component';
import {SmileyComponent} from './components/smiley.component';

/*
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { RoomsComponent } from './components/rooms.component';
import { SpotComponent } from './components/spot.component';
import { DashComponent } from './dash/dash.component';
import { WrapperDataFormatingComponent } from './components/wrapperDataFormating.component';
import { Slider } from './components/slider.component';
import { RoomComponent } from './components/room.component';
import { RoomSpotComponent } from './components/roomSpot.component';
import { SideMenuComponent } from './components/sideMenu.component';

import { BioRhythmComponent } from './components/bioRhythm.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { Credentials22Component } from './credentials22/credentials22.component';
*/


import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';



import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
//import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';



import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {DragDropModule} from '@angular/cdk/drag-drop';

//import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Rx';

@NgModule({
  declarations: [
    GameComponent,
    AppComponent,
    TutorialComponent,
    VideoComponent,
    LeftSideMenuComponent,
    SideMenuComponent,
    CredentialsComponent,
    SmileyComponent
    /*
    ,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    RoomsComponent,
    SpotComponent,
    DashComponent,
    WrapperDataFormatingComponent, Slider, RoomComponent, RoomSpotComponent, SideMenuComponent,  BioRhythmComponent, CredentialsComponent, Credentials22Component
*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    YouTubePlayerModule,
    NgbModule,
    MatExpansionModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    DragDropModule
    //,
    //Observable
    //FormGroup, FormControl, Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

*/
