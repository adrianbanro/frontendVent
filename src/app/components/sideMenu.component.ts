import { Component, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';

import { APIService } from '././api.service';

import { Observable } from 'rxjs';


import {CredentialsComponent} from './credentials/credentials.component';

import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

//import {CredentialsComponent} from './credentials/credentials.component';
//import { CredentialsComponent } from '../credentials/credentials.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { Credentials22Component } from '../credentials22/credentials22.component';

@Component({
    selector: 'sideMenu',
    template: `

    <!--
    <app-credentials22></app-credentials22>
<data></data>
-->


<!--
    <head>

    </head>

    <body>
    <button class="cross" (click)="closeModal()"> &#10006;</button>

    <p>
      <button type="button" class="btn btn-outline-primary" (click)="collapse.toggle()" [attr.aria-expanded]="!isCollapsed"
        aria-controls="collapseExample">
        Toggle
      </button>
    </p>

    <p>
      <button type="button" class="btn btn-outline-primary" (click)="collapse.toggle()" [attr.aria-expanded]="!isCollapsed22"
        aria-controls="collapseExample"  #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
        Floor 1
      </button>
    </p>


    <div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed22">
      <div class="card">
        <div class="card-body">
          spots available
        </div>
      </div>
    </div>






    <ul>
      <li>Menu Item99</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item1</li>
    </ul>
    </body>
-->

<!--
<mat-sidenav-container class="example-container">
  <mat-sidenav  mode="side" opened>Sidenav content</mat-sidenav>
  <mat-sidenav-content>Main content
-->




<button class="cross" (click)="closeModal()"> &#10006;</button>
  <ul>

<mat-accordion multi="false">
  <div class="card" *ngFor="let building of buildings; index as i">
  <mat-expansion-panel (opened)="panelOpenState = true"
                       (closed)="panelOpenState = false" (click)="retriveFloors(building)">
    <mat-expansion-panel-header >
    <div >
      <mat-panel-title>
      Building {{building}}
      </mat-panel-title>
      <mat-panel-description></mat-panel-description>
      </div>
    </mat-expansion-panel-header>


<mat-accordion multi="false">
  <div class="card" *ngFor="let floor of floors; index as j">
    <mat-expansion-panel (opened)="panelOpenState = true"
                         (closed)="panelOpenState = false" (click)="retriveRooms(building, floor)">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{floor}}
        </mat-panel-title>
        <mat-panel-description>

        </mat-panel-description>
      </mat-expansion-panel-header>

<div class="card" *ngFor="let room of rooms; index as t">
<button class="room" mat-raised-button (click)="spotExpansion(building,floor,room)">{{room}} Room</button> <br>



<!--
<div class="card" *ngFor="let spot of spots; index as z">

<table style="width:100%" *ngIf="this.expandSpot==true">
<tr>
<td>Ø {{spot}}</td>
<td>Ø</td>
</tr>
<tr>
<td>Ø</td>
<td (click)="spotExpansion(building,floor,room)">Ø</td>
</tr>
</table>
style="border-color: #4CAF50; color: green;"
</div>
-->

<mat-grid-list cols="2" rowHeight="1:1" gutterSize="10px">
<div  *ngFor="let spot of spots; index as z">
  <mat-grid-tile  *ngIf="this.expandSpot==true && this.roomToExpand==room">


<!--
  <button  class="virginSpot"  mat-raised-button (click)="reserveSpot(building,floor,room,spot)">Ø {{spot}}</button> <br>
-->
<!--
<button  [ngClass]="currentClasses" mat-raised-button (click)="reserveSpot(building,floor,room,spot)">Ø {{spot}}</button> <br>
-->

<div *ngIf="isUsed(spot)==false">
<button  class="virginSpot"  mat-raised-button (click)="reserveSpot(building,floor,room,spot)">Ø {{spot}}</button> <br>
</div>

<div *ngIf="isUsed(spot)==true">
<button  class="usedSpot"  mat-raised-button (click)="reserveSpot(building,floor,room,spot)">Ø {{spot}}</button> <br>
</div>

<!--
  <div *ngIf="this.virginSpot(building,floor,room,spot)==true">
  <button  class="virginSpot"  mat-raised-button (click)="reserveSpot(building,floor,room,spot)">Ø {{spot}}</button> <br>
  </div>

    <div *ngIf="this.virginSpot(building,floor,room,spot)==false">
  <button   class="usedSpot"  mat-raised-button (click)="reserveSpot(building,floor,room,spot)">Ø {{spot}}</button> <br>
</div>
-->
  </mat-grid-tile>


  </div>
</mat-grid-list>

<!--
<mat-grid-list cols="2" rowHeight="1:1"  gutterSize="10px">
<mat-grid-tile *ngFor="let spot of this.spots" >

<a style="color:black" >
  <mat-card style="height:100%" class="dashboard-card" >
    <mat-card-header>
      <mat-card-title>
        {{spot}}
        <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
          <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" xPosition="before">
          <button mat-menu-item >(click)="onClickMe($event,room.roomName)"Modify Climat</button>
          <button mat-menu-item>Freezze Climat</button>
        </mat-menu>
      </mat-card-title>
    </mat-card-header>

    <mat-card-content style="width:100%" class="dashboard-card-content">
      {{spot}}
    </mat-card-content>
  </mat-card>
  </a>

</mat-grid-tile>
</mat-grid-list>
-->

</div>


</mat-expansion-panel>
</div>
</mat-accordion>

</mat-expansion-panel>
  </div>
</mat-accordion>






<!--

-->

<credentials></credentials>

  `,
  styles: [`
    .example-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eee;
    }

.side-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
}



    section {
      display: table;
    }

    .example-label {
      display: table-cell;
      font-size: 14px;
      margin-left: 8px;
      min-width: 120px;
    }

    .example-button-row {
      display: table-cell;
      width: 490px;
    }

    .building {
      display: table-cell;
      width: 200px;
    }
    .floor {
      display: table-cell;
      width: 180px;
      float: right;
    }

    .room {
      display: table-cell;
      width: 150px;
      float: right;
    }

    :host {
      background: #1a2580;
      color: #fff;
      position: fixed;
      left: auto;
      top: 0;
      right: 0;
      bottom: 0;
      width: 20%;
      min-width: 250px;
      z-index: 9999;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }

    .virginSpot {
      border-color: #4CAF50;
      color: green;
    }

    .virginSpot:hover {
      background-color: #4CAF50;
      color: white;
    }

    .usedSpot {
  border-color: #ff9800;
  color: orange;
}

.usedSpot:hover {
  background: #ff9800;
  color: white;
}

    ul {
      font-size: 18px;
      line-height: 3;
      font-weight: 400;
      padding-top: 50px;
      list-style: none;
    }
  `]
   })
   export class SideMenuComponent{



    @Input() temperature = 0;
    @Input() humidity = 55;

    @Output() onClose: EventEmitter<boolean> = new EventEmitter();

    menuState = 'out';
public isCollapsed = true;
public isCollapsed22 = true;
panelOpenState = false;

expandSpot=false;

roomToExpand;

building;
roomName;

spots;
rooms;
floors;
buildings;

tuples;
uniq;

spot_ID;
//virginSpot;

currentClasses: {};
isVirgin=true;
virginSpots=[];
virginSpot;
usedSpots=[];



//////////

/*
addressForm = this.fb.group({
  company: null,
  firstName: [null, Validators.required],
  lastName: [null, Validators.required],
  address: [null, Validators.required],
  address2: null,
  city: [null, Validators.required],
  state: [null, Validators.required],
  postalCode: [null, Validators.compose([
    Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  ],
  shipping: ['free', Validators.required]
});

hasUnitNumber = false;

states = [
  {name: 'Alabama', abbreviation: 'AL'},
  {name: 'Alaska', abbreviation: 'AK'},
  {name: 'American Samoa', abbreviation: 'AS'}
];

*/












    //constructor(private apiService: APIService,private fb: FormBuilder){
    constructor(private apiService: APIService){
this.findBuildings()
//this.virginSpot=true;

    }




    onSubmit() {
      alert('Thanks!');
    }

    isUsed(spot) {
      //console.log("this.spots __  : ",this.spots);
      //console.log("this.usedSpots __  : ",this.usedSpots);
        return this.usedSpots.some(e => e === spot);
    }


    spotBelongsToRoom(building,floor,room,spot) {
      this.apiService.findByBuildingFloorRoom(building,floor,room)
        .subscribe(
          data => {
            this.tuples= data;
            console.log(data);
            let result = this.tuples.map(a => a.spot);

            console.log("spots:",result);
            //let uniq = result => [...new Set(result)];
            result = [...new Set(result)];

            this.spots=result;
            console.log("this.spots belongs :",this.spots);
      //console.log("this.spots __  : ",this.spots);
      //console.log("this.usedSpots __  : ",this.usedSpots);
        return this.spots.some(e => e === spot);
      },
      error => {
        console.log(error);
      });
    }





    setCurrentClasses(spot) {
  // CSS classes: added/removed per current state of component properties
  console.log("is Virgin ?  : ",this.isVirgin);

  //if (spot==1)
  this.currentClasses =  {
    virginSpot: spot==1,
    usedSpot: spot!=1
    //virginSpot: this.isVirgin,
    //usedSpot: !this.isVirgin
    //special:  this.isSpecial
  };
}

    onClick(ratingValue){
        this.temperature = ratingValue;
    }
    /*
    closeModal() {
      console.log("clicked to close");
      console.log("menuState : ",this.menuState);
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
      console.log("menuState : ",this.menuState);
    }
*/

/*
spotExpansion(building,floor,spot) {
    this.expandSpot=(this.expandSpot==true?false:true);
this.searchSpot(building,floor,spot);
}
*/

/*
spotExpansion() {
    this.expandSpot=(this.expandSpot==true?false:true);
//this.searchSpot(building,floor,spot);

//this.findFloors("A");
//this.findRooms("A","Ground Floor");
//this.findBuildings()
this.findSpots("A","Ground Floor","Riga");
}
*/
spotExpansion(building,floor,room) {
  this.spots=[];
    this.expandSpot=(this.expandSpot==true?false:true);

    this.roomToExpand=room;
    console.log("999999 this.roomToExpand=",this.roomToExpand);
    console.log("999999 room=",room);
    //alert(this.roomToExpand);
//this.searchSpot(building,floor,spot);

//this.findFloors("A");
//this.findRooms("A","Ground Floor");
//this.findBuildings()
this.findSpots(building,floor,room);
//href="/rooms/{{ room.id }}"
}

/*
doesUserExist(): Observable<boolean> {
 var myvars = this.af.list('/accounts/'+this.uid) as FirebaseListObservable<Listing[]>;

 return myvars.subscribe(data=>{
     console.log("length="+data.length)
     return data.length === 0; // true if that's the case, or false
   })
 }
*/



 isVirginSpot(building,floor,room,spot){

 this.apiService.findSpotIDByBuildingFloorRoomSpot(building,floor,room,spot)
.subscribe(
  data => {
    this.tuples= data;
    console.log(data);
    //let result = this.tuples;
    let result = this.tuples.map(a => a.id);
    //console.log("this.virginSpot 23233232:",result);
    this.spot_ID = result;
    this.virginSpot = result;
    console.log("this.virginSpot QQQ:",this.virginSpot);

//return result.length === 0;
//if (result.length == 0) return true;



//this.isVirgin=(result.length == 0?true:false);
//console.log("this.isVirgin:",this.isVirgin);


//this.isVirgin=true;

//this.virginSpot=false;

    //result = [...new Set(result)];

    //this.spots=result;
    //console.log("Spots :",result);
    //console.log("data  :",data);
  },
  error => {
    console.log(error);
  });

}



reserveSpot(building,floor,room,spot) {

this.apiService.findSpotIDByBuildingFloorRoomSpot(building,floor,room,spot)
.subscribe(
  data => {
    this.tuples= data;
    //console.log(data);
    //let result = this.tuples;
    let result = this.tuples.map(a => a.id);
    console.log("booking id 999999:",result);
    this.spot_ID = result;
console.log("this.spot_ID 55:",this.spot_ID);
    //result = [...new Set(result)];


    console.log("this.spot_ID 66:",this.spot_ID);
      const dataSet = {
        userID: 1,
        spotID:this.spot_ID,
        //spotID:result,
        climateID:1,
        createdAt:Date.now(),
        updatedAt:Date.now()
      };

        this.apiService.createBooking(dataSet)
          .subscribe(
            response => {
              console.log("this.spot_ID 77:",this.spot_ID);
              console.log(response);
              //this.submitted = true;
            },
            error => {
              console.log(error);
            });


    //this.spots=result;
    //console.log("Spots :",result);
    //console.log("data  :",data);
  },
  error => {
    console.log(error);
  });

}

retriveFloors(building) {
  console.log("building 333 :",building);

  //this.findFloors("A");
  this.findFloors(building);
  this.expandSpot=true;
}

retriveRooms(building, floor) {

this.findRooms(building, floor);
this.expandSpot=true;

}

closeModal() {
    this.onClose.emit(true);
}

searchSpot(building,floor,spot) {
  this.apiService.findByBuildingFloorRoom(building,floor,spot)
    .subscribe(
      data => {
        this.spots= data;
        console.log(data);
        console.log("spots for room:",data);
      },
      error => {
        console.log(error);
      });
}

findBuildings() {
  this.apiService.findBuildings()
    .subscribe(
      data => {
        this.tuples= data;
        console.log(data);
        let result = this.tuples.map(a => a.building);

        //console.log("Buildings 343434:",result);

        result = [...new Set(result)];

        //console.log("Buildings 343434:",result);

        this.buildings=result;
        //console.log("Buildings CNSTR:",this.buildings);
      },
      error => {
        console.log(error);
      });
}

findFloors(building) {
  this.apiService.findByBuilding(building)
    .subscribe(
      data => {
        this.tuples= data;
        console.log(data);
        let result = this.tuples.map(a => a.floor);

        //console.log("Buildings 343434:",result);
        //let uniq = result => [...new Set(result)];
        result = [...new Set(result)];


        this.floors=result;

      },
      error => {
        console.log(error);
      });
}

findRooms(building,floor) {
  this.apiService.findByBuildingFloor(building,floor)
    .subscribe(
      data => {
        this.tuples= data;
        console.log(data);
        let result = this.tuples.map(a => a.room);

        console.log("Rooms for Building X Floor Y:",result);
        //let uniq = result => [...new Set(result)];
        result = [...new Set(result)];


        this.rooms=result;
        console.log("Rooms for Building X Floor Y :",this.rooms);
      },
      error => {
        console.log(error);
      });
}

findSpots(building,floor,room) {
  this.apiService.findByBuildingFloorRoom(building,floor,room)
    .subscribe(
      data => {
        this.tuples= data;
        console.log(data);
        let result = this.tuples.map(a => a.spot);

        console.log("spots 981:",result);
        //let uniq = result => [...new Set(result)];
        result = [...new Set(result)];

        this.spots=result;
        console.log("this.spots 981 :",this.spots);

/*
        const updatedData={

            roomName: updatedRoomData.room,
            temperature: updatedRoomData.temperature,
            humidity: updatedRoomData.humidity
        }

        var prod;
        var mergedRoom;
*/
for ( let spot of this.spots) {
  //if (prod.roomName==updatedRoomData.room)
    //this.isVirginSpot(building,floor,room,spot);
//console.log("this.virginSpot GGG:",this.virginSpot);
  //if (this.isVirginSpot(building,floor,room,spot)==true)




  this.apiService.findSpotIDByBuildingFloorRoomSpot(building,floor,room,spot)
 .subscribe(
   data => {
     console.log("building,floor,room,spot :",building,floor,room,spot);
     this.tuples= data;
     console.log(data);
     //let result = this.tuples;
     let result = this.tuples.map(a => a.id);
     console.log("SpotID:",result);
     var spot_ID = result;
     //let spot_ID = result;
     console.log("spot_ID 9797 :",spot_ID );
     //console.log("this.spot_ID 9797 :",this.spot_ID );
     let userID = 1;
     console.log("userID 9797 :",userID );
     //this.virginSpot = result;
     //console.log("this.virginSpot QQQ:",this.virginSpot);

this.apiService.findBookingIDByUserSpot(userID,spot_ID)
.subscribe(
  data22 => {
    console.log("spot_ID 9696 : ",spot_ID);
    //console.log("this.spot_ID 9696 : ",this.spot_ID);
    this.tuples= data22;
    console.log("data 5353 MZM : ",data22);


//if (data22 !==[])
//if (data22 !=="undefined")
//if (data22.length !==0)
//if (data22 !=[])
//if (data22.isEmpty())
//if (data22[0]==0)

if (data22[0].id !=="undefined")

    {
    //let result = this.tuples;
    let result = this.tuples.map(a => a.id);
    console.log("result MZM  : ",result);

    let notVirginSpot = spot_ID;

    console.log("not virgin spot  : ",notVirginSpot);

    this.isVirgin=false;
    this.setCurrentClasses(spot);

    this.usedSpots = [...this.usedSpots,...notVirginSpot];
    console.log("this.usedSpots:",this.usedSpots);


    //console.log("this.isUsed(",spot,") :",this.isUsed(spot));
    //console.log("this.virginSpot 23233232:",result);
    this.spot_ID = result;
    //this.virginSpot = result;
    //console.log("this.virginSpot QQQ:",this.virginSpot);
 //return result.length === 0;
 //if (result.length == 0) return true;

 //virginSpot
 let virginSpot = result;
 this.virginSpots = [...this.virginSpots,...notVirginSpot];
//mergedRoom = {...prod, ...updatedData};
console.log("this.virginSpots:",this.virginSpots);
}

console.log("this.isUsed(",spot,") :",this.isUsed(spot));

},
error => {
  console.log(error);
});

 //this.isVirgin=(result.length == 0?true:false);
 //console.log("this.isVirgin:",this.isVirgin);


 //this.isVirgin=true;

 //this.virginSpot=false;

     //result = [...new Set(result)];

     //this.spots=result;
     //console.log("Spots :",result);
     //console.log("data  :",data);
   },
   error => {
     console.log(error);
   });









}

for ( let spot of this.spots) {
  //if (prod.roomName==updatedRoomData.room)
    //this.isVirginSpot(building,floor,room,spot);
//console.log("this.virginSpot GGG:",this.virginSpot);


}


        //findVirginSpots(building,floor,room);
        //console.log("Spots :",result);
        //console.log("data  :",data);
      },
      error => {
        console.log(error);
      });
}



   }
