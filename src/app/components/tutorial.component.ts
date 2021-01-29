import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { VideoComponent } from './video.component';
//<button class="cross" (click)="closeModal()"> &#10006;</button>
//<button type="button" class="close" aria-label="Close" (click)="closeModal()">(x)</button>
@Component({
  selector: 'app-root',
  template: `
  <div id="modal-content-wrapper">

      <header id="modal-header">
        <span>
          <h1 id="modal-title">Step by step walktrough</h1>
          <button type="button" class="close" aria-label="Close" (click)="closeModal()">(x)</button>
        </span>
      </header>
      <section id="modal-body">



      <div *ngIf="tab==0">
          <app-video></app-video>
          <p>History of ventilation...</p>
          <p>Trail blazers...</p>
          <p>More...</p>
      </div>
      <div *ngIf="tab==1">
          <app-video></app-video>
          <p>important facts about climatisation...</p>
          <p>important facts about climatisation...</p>
          <p>important facts about climatisation...</p>
      </div>
      <div *ngIf="tab==2">
          <app-video></app-video>
          <p>important facts about ventilation...</p>
          <p>important facts about ecology...</p>
          <p>important facts about geotermal pumps...</p>
      </div>
      <div *ngIf="tab==3">
          <app-video></app-video>
          <p>More facts...</p>
          <p>Do you know...</p>
          <p>Guiness Book Records...</p>
      </div>
      </section>
      <footer id="modal-footer">
          <button mat-raised-button id="modal-action-button" [disabled]="tab==0 ? 'disabled': null"  (click)="previous()">Previous</button>
          <button mat-raised-button id="modal-cancel-button" [disabled]="tab==3 ? 'disabled': null"(click)="next()">Next</button>
      </footer>
  </div>
`,
styles: [`
  html, body {
      height: 100%;
      height: 600px;
  }

  body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      display: grid;
      justify-items: center;
      align-items: center;
      background-color: #3a3a3a;
  }

  /* https://stackoverflow.com/a/48689004/9263761 */
  mat-dialog-container#modal-component {
      border: 3px solid #262626;
      border-radius: 11px;
      background-color: #1a1a1a;
  }
`]
})

export class TutorialComponent implements OnInit {

  tab=0;

  constructor(public dialogRef: MatDialogRef<TutorialComponent>) { }

  ngOnInit() {
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
}
