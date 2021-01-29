import { Component, OnInit, OnChanges } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { VideoComponent } from './video.component';


import { Observable, Subject } from 'rxjs';

import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, scan } from 'rxjs/operators';
//import { Observable } from 'rxjs';
/*
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
*/

//<button class="cross" (click)="closeModal()"> &#10006;</button>
//<button type="button" class="close" aria-label="Close" (click)="closeModal()">(x)</button>
@Component({
  selector: 'smiley',
  template: `
  <script src="https://unpkg.com/@reactivex/rxjs@5.3.0/dist/global/Rx.js"></script>
  <div id="modal-content-wrapper">

      <header id="modal-header">
        <span>
          <h1 id="modal-title">Correlation between Temperature & Humidity</h1>
          <button type="button" class="close" aria-label="Close" (click)="closeModal()">(x)</button>
        </span>
      </header>

      <section id="modal-body">



      <html>
      <head>
      <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      th, td {
        width:100px;
        height:100px;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        padding: 0px;
      }
      </style>
      </head>
      <body>
<!--
<div><code>observable|async</code>: Time: {{ time | async }}</div>
-->

<div class="coord">
  <!--<div>X: {{mouseX}}</div>-->
  <!--<div id="draggablePicture22" >Y: {{mouseY}}</div>-->
</div>




                <div style="width:100%; height:100%; ">
                <div *ngIf="(this.smiley22 ) as smiley">
                {{smiley.name }}
</div>
                </div>


      <table style="width:100%; height:100%">
        <tr>
          <th> Humidity vs.Temperature </th>
          <th>18</th>
          <th>19</th>
          <th>21</th>
          <th>22</th>
          <th>23</th>
          <th>24</th>
        </tr>
        <tr>
          <td><30%</td>
          <td></td>
          <td></td>
          <td title="title"><div id="something"></div></td>
          <td title="title"><div id="something"></div></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>30%-45%</td>
          <td><div id="something"></div></td>
          <td>
          <div id="something"></div>
          </td>
          <td ondrop="drop(event)"></td>
          <td ondrop="drop(event)"></td>
          <td ondrop="drop(event)"></td>
          <td></td>
        </tr>
        <tr>
          <td>45%-60%</td>
          <td style="idd:something;" id="something"></td>
          <td style="idd:something;"></td>
          <td id="something" >

          <div id="draggable" style="width:25px; height:25px;" class="example-box" draggable="true" ondrag="dragging(event)" cdkDrag>
<!--
          <div draggable="true" (click)="drag(event)" (dragstart)="drag(event)" id="draggable" style="width:25px; height:25px;" class="example-box" (dragover)="allowDrop(event)" cdkDrag >
-->

<div  *ngFor="let smiley of this.smilies; index as i">
</div>
          <div style="width:100%; height:100%; " class="dashboard-card-content">
          {{this.smiley22.name}}
          <!--    (drag)="drag(event)"
          <img id="draggablePicture" mat-card-image src={{this.smiley22.src}} style="width:100%">
-->
          </div>


            <i class="material-icons">sentiment_very_satisfied</i>
      <!--
      -->
          </div>

                </td>
          <td id="something"><div id="something"></div></td>
          <td id="something"><div id="something"></div></td>
          <td id="something"><div id="something"></div></td>
        </tr>
        <tr>
          <td>60%-75%</td>
          <td></td>
          <td id="something"></td>
          <td><div id="something"></div></td>
          <td><div id="something"></div></td>
          <td id="something"></td>
          <td></td>
        </tr>
        <tr>
          <td>>75%</td>
          <td id="something"></td>
          <td></td>
          <td id="something"><div id="something"></div></td>
          <td><div id="something"></div></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      </body>
      </html>



      </section>


      <footer id="modal-footer">

      </footer>
  </div>
`,
styles: [`
  #div1 {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
  .example-box {
    width: 80px;
    height: 80px;
    border: solid 1px #ccc;
    color: rgba(0, 0, 0, 0.87);
    cursor: move;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    background: #fff;
    border-radius: 4px;
    position: relative;
    z-index: 1;
    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .example-box:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`]
})

export class SmileyComponent implements OnInit {

tab=0;

//<div id="draggable" class="example-box" draggable="true" ondrag="drag(event)" cdkDrag>

//thingToDrag=document.getElementById("draggable");
/*
time = new Observable<string>((observer: Observer<string>) => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});

*/
clickObservable: Observable<Event> = fromEvent(document,'click');

thingToDrag=document.getElementById("draggable");
//thingToDrag.addEventListener('click',(event)=>console.log("click event",event));
/*
 observer = {
	next: function(value) {
  	console.log("value qwe",value);
    console.log("smiley",this.smiley);
    console.log("this.smilies",this.smilies);
    this.smiley22={
       name:'Confort zone 98',
       src:"assets/man.png",
         morning: 0,
         noon: 0,
         afternoon: 0,
         evening: 0
       };
       console.log("smiley22 mnb :",this.smiley22);
    if (value>500)    { this.smiley22={
       name:'Confort zone 98',
       src:"assets/man.png",
         morning: 0,
         noon: 0,
         afternoon: 0,
         evening: 0
       };console.log("this.smilies >500 :",this.smiley22);}
       else   {  this.smiley22={
          name:'Confort zone 99',
          src:"assets/man.png",
            morning: 0,
            noon: 0,
            afternoon: 0,
            evening: 0
          };console.log("this.smilies <500 :",this.smiley22);}
    console.log("this.smiley22",this.smiley22);
console.log("smilies",this.smilies);
  },
  error: function(error) {
  	console.log(error);
  },
  complete: function() {
  	console.log('Completed');
  }
};

   observable = fromEvent(this.thingToDrag, 'click').pipe(
    map((e: any) => (e.clientX)),
    filter(val => val > 300),
    debounceTime(10),
    distinctUntilChanged(),
    //switchMap(val => val*2)
  );
*/
smiley=  {
  name:'Hot 68',
  src:"assets/woman.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
  };

smiley22={
  name:'Hot 68',
  src:"assets/woman.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
};
/*
*/
/*
smilies =[
   {
  name:'Confort zone',
  src:"assets/man.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening: 0
  },
  {
  name:'Hot',
  src:"assets/woman.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
  }
];
*/
smilies =[

];


//thingToDrag.addEventListener('click',(event)=>console.log(event));

//document.getElementById("draggable").addEventListener('click',(event)=>{console.log(event)});

/*
something= fromEvent(document.getElementById("draggable"), 'ondrag')
	.subscribe(
  	//(value) => console.log(value.clientX)
  );
*/

/*
Rx.Observable.fromEvent(button, 'click')
	.subscribe(
  	(value) => console.log(value.clientX)
  );

typeahead = fromEvent(searchBox, 'input').pipe(
  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
  filter(text => text.length > 2),
  debounceTime(10),
  distinctUntilChanged(),
  switchMap(searchTerm => ajax(`/api/endpoint?search=${searchTerm}`))
);
*/





//var button = document.querySelector('button');
 button = document.getElementById("draggable" );


/*
subscription = Rx.Observable.create(function(obs) {
	//obs.next('A value');
  //obs.error('Error');
  //setTimeout(function() {
  //	obs.complete();
  //  obs.next('A second value');
  //}, 2000);
  button.onclick = function(event) {
  	obs.next(event);
  }
})
	.subscribe(observer);
  */





  constructor(public dialogRef: MatDialogRef<SmileyComponent>) {
/*
    var thingToDrag=document.getElementById("draggable");
    thingToDrag.addEventListener('click',(event)=>console.log("click event",event));

    var observer = {
    	next: function(value) {
      	console.log("value",this.value);
        console.log("smiley",this.smiley);
        console.log("this.smilies",this.smilies);
        this.smiley22={
       name:'Confort zone 99',
       src:"assets/man.png",
         morning: 0,
         noon: 0,
         afternoon: 0,
         evening: 0
       };
        if (value>500) this.smilies =[
           {
          name:'Confort zone 88',
          src:"assets/man.png",
            morning: 0,
            noon: 0,
            afternoon: 0,
            evening: 0
          }
        ];
        else  this.smilies =[
          {
          name:'Hot',
          src:"assets/woman.png",
            morning: 0,
            noon: 0,
            afternoon: 0,
            evening:0
          }
        ];
        console.log("this.smiley22",this.smiley22);
    console.log("smilies",this.smilies);
      },
      error: function(error) {
      	console.log(error);
      },
      complete: function() {
      	console.log('Completed');
      }
    };

      var observable = fromEvent(thingToDrag, 'click').pipe(
        map((e: KeyboardEvent) => (e.clientX)),
        filter(val => val > 300),
        debounceTime(10),
        distinctUntilChanged(),
        //switchMap(val => val*2)
      );



      observable.subscribe(
        observer
      );
      */
  }



  ngOnInit() {
    this.subscribeToObservable();

    var elmnt = document.getElementById("draggable" );
  //var height= elmnt.offsetHeight;
//  console.log("height: ",elmnt.offsetHeight);

  var thingToDrag=document.getElementById("draggable");
  thingToDrag.addEventListener('click',(event)=>console.log("click event",event));
//thingToDrag.getEventListeners




/*
time = new Observable<string>((observer: Observer<string>) => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});
*/
/*
document.ondrag = function(event) {
  console.log("ondrag event",event);
}

dragging(event);

dragging(event) {
 (event)=>console.log("dragging event",event);
}
*/
/*
Array.from(thingToDrag.querySelectorAll("*")).forEach(e => {
  const ev = getEventListeners(e);
  if (Object.keys(ev).length !== 0) {console.log("EventListeners",e, ev)}
});
*/

//thingToDrag.addEventListener('ondrag',(event)=>console.log("ondrag event",event));

/*
fromEvent(thingToDrag, 'click')
	.subscribe(
  	(value) => console.log("value.clientX : ",value.clientX)
  );
*/

/*
var smilies =[
   {
  name:'Confort zone',
  src:"assets/man.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening: 0
  },
  {
  name:'Hot',
  src:"assets/woman.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
  }
];
*/
var smilies =[
];
//var smiley=smilies[0];

this.smiley22=  {
  name:'Hot 69',
  src:"assets/woman.png",
    morning: 0,
    noon: 0,
    afternoon: 0,
    evening:0
  };

console.log("smiley",this.smiley);
//console.log("this.smiley",this.smiley);

var pictureNode = document.getElementById("draggable" );
const image = document.createElement('img');

var id = document.createAttribute("id");       // Create a "class" attribute
id.value = "pic";                           // Set the value of the class attribute
image.setAttributeNode(id);

var height = document.createAttribute("height");       // Create a "class" attribute
height.value = "65px";                           // Set the value of the class attribute
image.setAttributeNode(height);

var width = document.createAttribute("width");       // Create a "class" attribute
width.value = "65px";                           // Set the value of the class attribute
image.setAttributeNode(width);

image.src  = "assets/man.png"
pictureNode.appendChild(image);

var observer = {
	next: function(value1) {
  	console.log("value clintX",value1.clientX);
    console.log("value clintY",value1.clientY);
    console.log("smiley",this.smiley);
    console.log("this.smilies",this.smilies);



    var pictureNode = document.getElementById("draggable" );
console.log("pictureNode : ",pictureNode);

var divs = document.getElementById("pic");
divs.parentNode.removeChild(divs);

var par = pictureNode.parentNode;
console.log("par : ", par);



var idParent = pictureNode.getAttribute('id');  //.parentNode.
console.log("idParent : ", idParent);
    //pictureNode.removeChild(image);
if (idParent=="something"){
  image.src  = "assets/smiley_verycold.png"
  pictureNode.appendChild(image);
}




    image.src  = "assets/smiley_ok.png"
    pictureNode.appendChild(image);



    //id="draggablePicture22"

    this.smiley22={
       name:'Confort zone 98',
       src:"assets/man.png",
         morning: 0,
         noon: 0,
         afternoon: 0,
         evening: 0
       };
       console.log("smiley22 mnb :",this.smiley22);

var climate;
if (value1.clientX<400 && value1.clientY<400 )  {this.climate="cold&dry"; console.log("climate :", this.climate);}
else if (value1.clientX<550 && value1.clientY<500 ) this.climate="slightly cold&dry";
else if (value1.clientX<700 && value1.clientY<600 ) this.climate="ok";
else if (value1.clientX<900 && value1.clientY<800 ) this.climate="slightly hot";
else if (value1.clientX<1100 && value1.clientY<1000 ) this.climate="very hot";
else climate="very hot";


switch (this.climate) {
  case "cold&dry":
  //case 5:
   //alert(this.climate);
  console.log("climat 7676:", this.climate);
  image.src  = "assets/smiley_verycold.png";
  pictureNode.appendChild(image);
    break;
  case "slightly cold&dry":
  //case 6:
  image.src  = "assets/smiley_cold.png";
  pictureNode.appendChild(image);
    break;

    case "ok":
    //case 6:
    image.src  = "assets/smiley_ok.png";
    pictureNode.appendChild(image);
      break;

      case "slightly hot":
      //case 6:
      image.src  = "assets/smiley_hot.png";
      pictureNode.appendChild(image);
        break;

        case "very hot":
        //case 6:
        image.src  = "assets/smiley_hot&dry2.png";
        pictureNode.appendChild(image);
          break;

  default:
    //text = "Looking forward to the Weekend";
}
/*
    if (value1.clientX>500)    {
      image.src  = "assets/smiley_ok.png";
      pictureNode.appendChild(image);
      this.smiley22={
       name:'Confort zone 98',
       src:"assets/man.png",
         morning: 0,
         noon: 0,
         afternoon: 0,
         evening: 0
       };console.log("this.smilies >500 :",this.smiley22);}
       else   {
         image.src  = "assets/smiley_hot.png"
         pictureNode.appendChild(image);
         this.smiley22={
          name:'Confort zone 99',
          src:"assets/man.png",
            morning: 0,
            noon: 0,
            afternoon: 0,
            evening: 0
          };console.log("this.smilies <500 :",this.smiley22);}
    console.log("this.smiley22",this.smiley22);
console.log("smilies",smilies);
*/
  },
  error: function(error) {
  	console.log(error);
  },
  complete: function() {
  	console.log('Completed');
  }
};

  var observable = fromEvent(thingToDrag, 'click').pipe(
    //map((e: any) => (e.clientX,e.clientY)),
    //filter(val => val > 300),
    debounceTime(10),
    distinctUntilChanged(),
    //switchMap(val => val*2)
  );



  observable.subscribe(
    observer
  );

/*
  	observable.subscribe(
    	(value) => console.log("value.clientX : ",value)
    );
*/


/*
  typeahead = fromEvent(searchBox, 'input').pipe(
    map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
    filter(text => text.length > 2),
    debounceTime(10),
    distinctUntilChanged(),
    switchMap(searchTerm => ajax(`/api/endpoint?search=${searchTerm}`))
  );
*/



  }





  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

  next() {
    this.tab++;
  }

  previous() {
    this.tab--;
  }

  drag(ev) {

    //ev.dataTransfer.effectAllowed.setData("text", ev.target.id);
    console.log(`ev : `,ev);
    //alert(ev);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.effectAllowed.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

allowDrop(ev) {
  ev.preventDefault();
}



  subscribeToObservable() {
        this.clickObservable.subscribe(() => {
        console.log(`The dom has been clicked!`);
      })
    }
}
