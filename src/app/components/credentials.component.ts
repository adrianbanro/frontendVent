import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'credentials66',
  template: `
  <div>
  welcome {{this.user}}
  </div>













  `
  //,
  //styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent66 implements OnInit {
//document.getElementById("myText").defaultValue = "Goofy";
defaultEmail="your email & password";
defaultPassword="your password";
user;

//if (this.form.email)

  //form = new FormGroup();
  form = new FormGroup({
  enterEmail: new FormControl (null, Validators.required),
  email: new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  password: new FormControl ('', Validators.required)
  });

  constructor() {this.user="ad"; }

  ngOnInit(): void {
    this.user="ad";
  }

book(){
  //console.log("alskdjlkas",this.form.value, "email:",this.form.value.email); // prints form values in json format
  //console.log("controls touched:", this.form.controls.email.touched, "controls pristine:", this.form.controls.email.pristine);
console.log("controls touched:", this.form.controls.email);
console.log("controls status:", this.form.controls.email.status);
this.user=this.form.controls.email;
this.user="ad";


  }
}
