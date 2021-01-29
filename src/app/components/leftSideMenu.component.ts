import { Component, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'leftSideMenu',
    template: `

    <!--
    <app-credentials22></app-credentials22>
<data></data>
-->


<!--
-->
    <head>

    </head>

    <body>
    <button class="cross" (click)="closeModal()"> &#10006;</button>






    <ul>
      <li>Menu Item99</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item1</li>
    </ul>
    </body>
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
        left:auto;
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
     export class LeftSideMenuComponent{

       @Output() onClose: EventEmitter<boolean> = new EventEmitter();

       constructor(){
   //this.findBuildings()
   //this.virginSpot=true;

       }

       closeModal() {
           this.onClose.emit(true);
       }
}
