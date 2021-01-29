import {Component} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { TutorialComponent } from './tutorial.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import { LeftSideMenuComponent } from './leftSideMenu.component';

import { SideMenuComponent } from './sideMenu.component';

import { CredentialsComponent66 } from './credentials.component';

import { SmileyComponent } from './smiley.component';

/*
//import { RoomService } from '././room.service';
import { RoomService } from './room.service';
//import { RoomComponent } from './room.component';
import { APIService } from '././api.service';

import { BioRhythmComponent } from './bioRhythm.component';
*/

//import { ActivatedRoute, Router } from '@angular/router';

// <a style="color:black" href="/rooms/{{ room.id }}">
//<a style="color:black" [routerLink]="['rooms',room.id]">

//float: right;
//top: 444px;
//right: 1px;
//position: relative;


//(click)="drawer.toggle()"   (click)="openNav()"   (click)="toggleMenu()"
//  <span style="font-size:30px;cursor:pointer" (click)="openNav()">&#9776; open</span>
//<leftSideMenu  [@slideInOut]="menuState"    *ngIf="showSideMenu" (onClose)="modalClosed($event)"  ></leftSideMenu>

@Component({
    selector: 'game',
    template: `


    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" (click)="closeNav()">&times;</a>
      <a href="#"><i class="material-icons">contact_page</i>  About you</a>

      <a href="#"><i class="material-icons">info_outline</i>  Tutorials</a>


      <a href="#"><i class="material-icons">view_module</i> Corelations</a>
      <a href="#">
<i class="material-icons">login</i>
       LogIn</a>
    </div>







<button class="button" style=" text-align:center;" (click)="toggleMenu()">Help</button>


<div *ngIf="win.innerWidth<800">
<button (click)="openNav()" class="hamburger"> Help
  <span>toggle menu</span>
</button>
</div>



<sideMenu [@slideInOut22]="menuState"  *ngIf="showSideMenu"   (onClose)="modalClosed($event)"></sideMenu>

<div *ngIf="win.innerWidth>=800">
<mat-toolbar  color="primary">
  <mat-toolbar-row style="height:170px;">
  <!--
    <button mat-icon-button (click)="sidenav.toggle()" fxShow="true" fxHide.gt-sm>
      <mat-icon>menu</mat-icon>
    </button>
    -->

    <span class="example-spacer"></span>
    <div fxShow="true" fxHide.lt-md="true">
      <span style="font-size:30px;cursor:pointer" (click)="openNav()">&#9776;  </span>
      <span>VentilationApp  </span>
      <!-- The following menu items will be hidden on both SM and XS screen sizes -->
       <button mat-raised-button id="logout-button" (click)="openModal()">Tutorials</button>
      <!--
      <a href="#" mat-button>
        <mat-icon>tutorials</mat-icon>
        Tutorials
      </a>
      -->
      <!--
      -->
      <a  mat-button (click)="openSmileyModal()">
        <mat-icon>perm-identity</mat-icon>
        Who are you?
      </a>

       <button mat-raised-button id="logout-button" (click)="openSmileyModal()">Learn with Smiley</button>
      <a href="#" mat-button>
        <mat-icon>info</mat-icon>
        Good to know
      </a>
      <!--
      <a href="/credentials" mat-button>
      -->


      <a mat-button (click)="showCredentialsComponent()">
      <div *ngIf="!this.showCredentials">
      <div>
        <mat-icon>login</mat-icon>
        Login
      </div>
      </div>
      </a>



      <a  mat-button>
      <div *ngIf="this.showCredentials">
      <credentials></credentials>
      </div>
      </a>


    </div>
  </mat-toolbar-row>
</mat-toolbar>
</div>





<mat-progress-bar mode="buffer"></mat-progress-bar>

<div style="background-color:lavenderblush;">






<div style="height: 100vh;">




<!--
-->
<div class="main-wrap" [@cardAnimation]="cards.length" @plusAnimation>
  <div class="card" *ngFor="let card of cards; index as i">
    <button class="cross" (click)="deleteCard(i)"> &#10006;</button>

    <mat-card class="dashboard-card" (click)="onClickMe($event)">
      <mat-card-header>
        <mat-card-title>


        </mat-card-title>
      </mat-card-header>

      <mat-card-content   style="width:100%" class="dashboard-card-content">

        <div style="width:100%; height:100%; " class="dashboard-card-content">
        <img mat-card-image src={{card.src}} style="width:100%">
        </div>

      </mat-card-content>
    </mat-card>

    </div>


    <div class="card plus-card" (click)="addCard()">
      <h1 class="plus">&#43;</h1>
    </div>
    <div class="card plus-card" (click)="scrollDown()">
    <!--
      <i class="fas fa-chevron-down"></i>
    -->
    <i class="material-icons">arrow_drop_down_circle</i>
    </div>

<mat-progress-bar mode="buffer"></mat-progress-bar>




    <div class="card" *ngFor="let metric of climatMetrics; index as i">
      <button class="next" (click)="next(i)"> > </button>
      <p class="info" style="font-size:12px">{{metric.name}}</p>
      <p class="info" style="font-size:14px">{{metric.morning}}</p>
      <p class="info" style="font-style: italic; font-size:18px">{{metric.description}}</p>
      <button class="previous" (click)="previous(i)"> < </button>
    </div>

    <div class="card plus-card">
      <h2 style="font-size: 20px;" class="plus">Your bioRtythm : {{this.score}}</h2>
    </div>




  </div>
<!--
-->






<!--
<div class="main-wrap">
  <div class="card" *ngFor="let metric of climatMetrics; index as i">
    <button class="next" (click)="next(i)"> > </button>
    <p class="info" style="font-size:12px">{{metric.name}}</p>
    <p class="info" style="font-size:14px">{{metric.morning}}</p>
    <p class="info" style="font-size:18px">{{metric.description}}</p>
    <button class="previous" (click)="previous(i)"> < </button>
  </div>
  <div class="card plus-card">
    <h2 style="font-size: 20px;" class="plus">Your bioRtythm : {{this.score}}</h2>
  </div>
</div>
-->

<!--
<div class="main-wrap">
  <div class="card" *ngFor="let metric of climatMetrics22; index as i">
    <button class="next" (click)="next(i)"> > </button>
    <p class="info" style="font-size:12px">{{metric}}</p>
    <p class="info" style="font-size:14px">{{metricValue}}</p>
    <p class="info" style="font-size:18px">{{metricValueDescription}}</p>
    <button class="previous" (click)="previous(i)"> < </button>
  </div>
</div>
-->


<!--
  <mat-sidenav-container fxFlexFill>
    <mat-sidenav #sidenav>
      <mat-nav-list>
        <a href="#" mat-list-item>
          <mat-icon>notifications</mat-icon>
          Notifications
        </a>
        <a href="#" mat-list-item>
          <mat-icon>message</mat-icon>
          Messages</a>
        <a href="#" mat-list-item>
          <mat-icon>account_box</mat-icon>
          My Account
        </a>
        <a href="#" mat-list-item>
          <mat-icon>lock</mat-icon>
          My Account
        </a>
        <a (click)="sidenav.toggle()" mat-list-item>
          <mat-icon>close</mat-icon> Close
        </a>
      </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content fxFlexFill>Main content</mat-sidenav-content>
  </mat-sidenav-container>
  -->
</div>













    `,
providers: [],
styles: [`
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }


.dashboard-card-content{
  width:100px;
  height:150px;
}

.dashboard-card{
  width:120px;
  height:170px;
}

  .i{
    position: fixed;
    bottom: 40px;
    right: 40px;
    font-size: 45px;
    background: #0f55bd;
    padding: 7px 10px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    border: 1px solid #0D47A1;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s ease-in-out;
  }
  .i:hover{
    transition: .5s;
    background: #0d4aa5;
  }
  .main-wrap {
  	 width: 100%;
  	 height: 100%;
  	 display: flex;
  	 padding: 100px;
  	 flex-wrap: wrap;
  	 box-sizing: border-box;
  	 justify-content: center;
  }

  .main-wrap-metrics {
    position: relative;
  	 width: 100%;
  	 height: 100%;
  	 display: flex;
  	 padding: 100px;
  	 flex-wrap: wrap;
  	 box-sizing: border-box;
  	 justify-content: center;
  }

  .main-wrap-metrics .card {
    position: relative;
    width: 200px;
    height: 250px;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    margin: 10px 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0ea7c2;
 }

   .main-wrap .card {
  	 width: 200px;
  	 height: 250px;
  	 background: white;
  	 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  	 border-radius: 10px;
  	 margin: 10px 20px;
  	 position: relative;
  	 display: flex;
  	 justify-content: center;
  	 align-items: center;
  	 background: #0ea7c2;
     justify-content: center;
  }
   .main-wrap .card .info {
  	 color: #fff;
  	 font-size: 40px;
     justify-content: center;
  }
   .main-wrap .card.plus-card {
  	 cursor: pointer;
  	 transition: 0.5s;
  	 background: #05dd46;
  }
   .main-wrap .card.plus-card:hover {
  	 transform: scale(1.03);
  }
   .main-wrap .card.plus-card .plus {
  	 font-size: 100px;
  	 color: #fff;
  }
   .main-wrap .card .cross {
  	 position: absolute;
  	 top: 10px;
  	 right: 10px;
  	 font-size: 30px;
  	 border: none;
  	 background: none;
  	 color: #fff;
  	 transition: 0.5s;
  }

  .main-wrap .card .next {
    position: absolute;
    top: 200px;
    right: 10px;
    font-size: 30px;
    border: none;
    background: none;
    color: #fff;
    transition: 0.5s;
 }

 .main-wrap .card .previous {
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 30px;
  border: none;
  background: none;
  color: #fff;
  transition: 0.5s;
}
   .main-wrap .card .cross:focus {
  	 outline: none;
  }
   .main-wrap .card .cross:hover {
  	 cursor: pointer;
  	 transform: scale(1.2);
  }

  .button {
    float: right;
    top: 444px;
    right: -29px;
    position: fixed;
    text-align: vertical;

    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
  }








  .hamburger {



    display: block;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 96px;
    height: 96px;
    font-size: 0;
    text-indent: -9999px;
    cursor: pointer;
    outline: none;
    background: none;
    border: 0;
  }

  .hamburger span {
    display: block;
    position: absolute;
    top: 44px;
    left: 18px;
    right: 18px;
    height: 8px;
    background: #1a2580;
  }

  .hamburger span::before,
  .hamburger span::after {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #1a2580;
    content: "";
  }

  .hamburger span::before {
    top: -20px;
  }

  .hamburger span::after {
    bottom: -20px;
  }
`],
animations: [
  trigger('slideInOut', [
    state('in', style({
      transform: 'translate3d(0,0,0)'
    })),
    state('out', style({
      transform: 'translate3d(100%,0,0))'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]),
  trigger('slideInOut22', [
    state('in', style({
      transform: 'translate3d(0, 0, 0)'
    })),
    state('out', style({
      transform: 'translate3d(100%, 0, 0)'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]),

  // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        query(':leave', stagger('300ms', [
          animate('500ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ]),

    // Trigger animation for plus button
    trigger('plusAnimation', [

      // Transition from any state to any state
      transition('* => *', [
        query('.plus-card', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.plus-card', stagger('500ms', [
          animate('300ms 1.1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
      ])
    ])
]
})



export class GameComponent {
  detailVisibility;
  dashboardVisibility;
   activeRoom;
   rooms;
win=window;
   index = 3;
sexCards = ['Man', 'Woman'];

cards =[
   {
  name:'Man',
  src:"assets/man.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening: 0
  },
  {
  name:'Woman',
  src:"assets/woman.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
  }
];

showCredentials=false;

menuState:string = 'out';
showSideMenu=true;

 climatMetrics22 = ['airFlowLevel', 'airFlowSpeed', 'airFlowTemperature', 'airFlowHumidity','light' ];
 metricValue=15;
 metricValueDescription="standstill";

 //climatMetrics = ['airFlowLevel', 'airFlowSpeed', 'airFlowTemperature', 'airFlowHumidity','light' ];




 climatMetrics =[
    {
   name:'airFlowLevel',
   //src:"assets/man.png",
     description: "",
     morning: 0,
     noon: 0,
     afternoon: 0,
     evening: 0
   },
   {
   name:'airFlowSpeed',
   //src:"assets/woman.png",
   description: "",
     morning: 0,
     noon: 0,
     afternoon: 0,
     evening:0
   },
   {
  name:'airFlowTemperature',
  //src:"assets/man.png",
  description: "",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening: 0
  },
  {
  name:'airFlowHumidity',
  //src:"assets/woman.png",
  description: "",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
  }
 ];


 currentSpot;
 spots;

 building;
 roomName;

 score=100;

 constructor(private route: ActivatedRoute,private router: Router, public matDialog: MatDialog){




//  constructor(private route: ActivatedRoute,private router: Router, roomService:RoomService,private apiService: APIService,public matDialog: MatDialog){


   // ,private route: ActivatedRoute,private router: Router


   /*
       this.rooms=apiService.getAll()
       .subscribe(
         data => {
           this.rooms = data;
           console.log(data);
         },
         error => {
           console.log(error);
         });
   */




//var id=this.route.snapshot.paramMap.get('id');

    //this.rooms=roomService.getRooms();      //UNCOMMENT OUT HERE
    //console.log("rooms",this.rooms);        //UNCOMMEMT OUT HERE
    this.detailVisibility=1;
        this.dashboardVisibility=0;
    //this.detailVisibility=1;
    //this.dashboardVisibility=0;
    //this.currentSpot


    this.calculateClimateMetrics();
 }


showCredentialsComponent(){
  this.showCredentials = this.showCredentials === true ? false : true;

}

 openNav() {
   document.getElementById("mySidenav").style.width = "250px";
 }

 closeNav() {
   document.getElementById("mySidenav").style.width = "0";
 }
/*

 addCard() {
   //this.sexCards.push('Card ' + (++this.index));
   this.sexCards.push('Cyclist');
   this.sexCards.push('WatchMovie');
   this.sexCards.push('LightClothing');
   this.sexCards.push('ThickClothing');
   this.sexCards.push('Short');
   this.sexCards.push('Tall');
   this.sexCards.push('EarlyMorning');
   this.sexCards.push('LateBed');
 }

*/

/*
*/
 addCard() {
   //this.sexCards.push('Card ' + (++this.index));
   this.cards.push({
  name:'Cyclist',
  src:"assets/cyclist.png",
    morning: 45,
    noon: 0,
    afternoon: 0,
    evening: 0
  });

  this.cards.push({
 name:'WatchMovie',
 src:"assets/watchMovie.png",
 morning: -17,
 noon: 0,
 afternoon: 0,
 evening: 0
 });

 this.cards.push({
name:'LightClothing',
src:"assets/lightClothing.png",
morning: -6,
noon: 0,
afternoon: 0,
evening: 0
});

this.cards.push({
name:'ThickClothing',
src:"assets/thickClothing.png",
morning: 12,
noon: 0,
afternoon: 0,
evening: 0
});

this.cards.push({
name:'Short',
src:"assets/short.png",
morning: 0,
noon: 0,
afternoon: 0,
evening: 0
});

this.cards.push({
name:'Tall',
src:"assets/tall.png",
morning: 0,
noon: 0,
afternoon: 0,
evening: 0
});

this.cards.push({
name:'EarlyMorning',
src:"assets/earlyMorning.png",
morning: 9,
noon: 0,
afternoon: 0,
evening: 0
});

this.cards.push({
name:'LateBed',
src:"assets/lateBed.png",
morning: -8,
noon: 0,
afternoon: 0,
evening: 0
});
 }

 /*
*/

/*
 cards =[
    {
   "name":'Man',
     "morning": 0,
     "noon": 0,
     "afternoon": 0,
     "evening": 0
   },
   "name":'Woman',
     "morning": 0,
     "noon": 0,
     "afternoon": 0,
     "evening":0
   }
 ];
*/


scrollDown() {
  window.scrollTo({
    top:1600,
    left:600,
    behavior: "smooth"

  })
}

 next(i) {
   //this.metricValue++;
   //this.metricValueDescription="mild breeze"
/*
   var Number.prototype.between33 = function(a, b) {
     var min = Math.min.apply(Math, [a, b]),
       max = Math.max.apply(Math, [a, b]);
     return this > min && this < max;
   };
*/
   this.climatMetrics.forEach(function (metric, index) {


if(i==index){
if(metric.name=="airFlowTemperature") {metric.morning++; console.log("metric.morning :",metric.morning);


/*
Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
*/
/*
if (metric.morning.between33(17,20)) {console.log("between :"); metric.description="freshly confortable";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning.between33(20,22)) metric.description="well confortable";
else if (metric.morning.between33(22,24)) metric.description="well warmer";
}
*/

if (metric.morning<20) {console.log("between :"); metric.description="freshly confortable";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning<22) metric.description="well confortable";
else if (metric.morning<24) metric.description="well warmer";
}



if(metric.name=="airFlowHumidity") {metric.morning++; console.log("metric.morning :",metric.morning);

/*
Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
*/
/*
if (metric.morning.between33(40,50)) {console.log("between :"); metric.description="not so dry breeze";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning.between33(50,55)) metric.description="little damp breeze";
else if (metric.morning.between33(55,70)) metric.description="damper breeze";
}
*/
if (metric.morning<50) {console.log("between :"); metric.description="not so dry breeze";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning<55) metric.description="little damp breeze";
else if (metric.morning<70) metric.description="damper breeze";
}

}
});
 }

 previous(i) {
   //this.metricValue--;
   //this.metricValueDescription="soft blow"

/*
   Number.prototype.between = function(a, b) {
     var min = Math.min.apply(Math, [a, b]),
       max = Math.max.apply(Math, [a, b]);
     return this > min && this < max;
   };
*/
   this.climatMetrics.forEach(function (metric, index) {


if(i==index){
if(metric.name=="airFlowTemperature")
{metric.morning--; console.log("metric.morning :",metric.morning);

/*
Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
*/
/*
if (metric.morning.between(18,20)) {console.log("between :"); metric.description="freshly confortable";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning.between(20,22)) metric.description="well confortable";
else if (metric.morning.between(22,24)) metric.description="well warmer";
}
*/
if (metric.morning<20) {console.log("between :"); metric.description="freshly confortable";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning<22) metric.description="well confortable";
else if (metric.morning<24) metric.description="well warmer";
}

if(metric.name=="airFlowHumidity")
{metric.morning--; console.log("metric.morning :",metric.morning);

/*
Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
*/
/*
if (metric.morning.between(40,50)) {console.log("between :"); metric.description="not so dry breeze";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning.between(50,55)) metric.description="little damp breeze";
else if (metric.morning.between(55,70)) metric.description="damper breeze";
}
*/
if (metric.morning<50) {console.log("between :"); metric.description="not so dry breeze";console.log("this.metric.description :",this.metric.description)}
else if (metric.morning<55) metric.description="little damp breeze";
else if (metric.morning<70) metric.description="damper breeze";
}

}
});

 }

 deleteCard(i) {
   //this.sexCards.splice(i, 1);
   this.cards.splice(i, 1);
   //this.score=this.score-6;
     console.log("this.score : ",this.score);
     this.calculateScore();
 }

 amount(item){
   return item.morning;
 }

 sum(prev, next){
   return prev + next;
 }

 calculateScore() {
   var cards=this.cards;
 //cards.map(this.amount).reduce(this.sum);
 //console.log("Calculated score : ",cards);

//cards.reduce((a, b) => +a + b.morning, 0);
//console.log("Calculated score : ",cards);

 //let sum = this.cards.map(o => o.morning).reduce((a, c) => { return a + c });
  this.score = this.cards.map(o => o.morning).reduce((a, c) => { return a + c });
console.log("Calculated score : ",this.score);
this.calculateClimateMetrics()
}

calculateClimateMetrics(){

switch (true) {
    case (this.score <= 20):
        console.log("Calculated 444 : ", this.score);
        this.climatMetrics.forEach(function (metric, index) {
  if(metric.name=="airFlowTemperature") {metric.morning=22; metric.description="well warmer"; console.log("metric.morning :",metric.morning);}
  if(metric.name=="airFlowHumidity") {metric.morning=60; metric.description="well damp breeze"; console.log("metric.morning :",metric.morning);}
});
        break;
    case (this.score <= 40)&&(this.score > 20):
        console.log("Calculated 555 : ", this.score);
        this.climatMetrics.forEach(function (metric, index) {
  if(metric.name=="airFlowTemperature") {metric.morning=20; metric.description="well confortable"; console.log("metric.morning :",metric.morning);}
  if(metric.name=="airFlowHumidity") {metric.morning=55; metric.description="little damper breeze"; console.log("metric.morning :",metric.morning);}
});
        break;
    case (this.score > 50):
       console.log("Calculated 667 : ", this.score);
       this.climatMetrics.forEach(function (metric, index) {
 if(metric.name=="airFlowTemperature") {metric.morning=18; metric.description="freshly confortable"; console.log("metric.morning :",metric.morning);}
 if(metric.name=="airFlowHumidity") {metric.morning=50; metric.description="not so dry breeze"; console.log("metric.morning :",metric.morning);}
});
        break;
}

}

 modalClosed(isClosed) {
     //this.showSideMenu = false;
     this.menuState = this.menuState === 'out' ? 'in' : 'out';
 }

 toggleMenu() {
   this.menuState = this.menuState === 'out' ? 'in' : 'out';
   this.showSideMenu = true;
 }

 openModal() {
   const dialogConfig = new MatDialogConfig();
   // The user can't close the dialog by clicking outside its body
   dialogConfig.disableClose = true;
   dialogConfig.id = "modal-component";
   dialogConfig.height = "350px";
   dialogConfig.width = "600px";
   // https://material.angular.io/components/dialog/overview
   const modalDialog = this.matDialog.open(TutorialComponent, dialogConfig);
 }

 openSmileyModal() {
   const dialogConfig = new MatDialogConfig();
   // The user can't close the dialog by clicking outside its body
   dialogConfig.disableClose = true;
   dialogConfig.id = "modal-component";
   dialogConfig.height = "700px";
   dialogConfig.width = "900px";
   // https://material.angular.io/components/dialog/overview
   const modalDialog = this.matDialog.open(SmileyComponent, dialogConfig);
 }


}
