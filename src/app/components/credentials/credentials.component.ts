import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
//document.getElementById("myText").defaultValue = "Goofy";
defaultEmail="your email & password";
defaultPassword="your password";
user;
showUserName=false;

//if (this.form.email)

  //form = new FormGroup();
  form = new FormGroup({
  enterEmail: new FormControl (null, Validators.required),
  email: new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  password: new FormControl ('', Validators.required)
  });

  constructor() { this.user="ad";
console.log("this.form.controls.email.value",this.form.controls.email);}


  ngOnInit(): void {
  }

book(){
  //console.log("alskdjlkas",this.form.value, "email:",this.form.value.email); // prints form values in json format
  //console.log("controls touched:", this.form.controls.email.touched, "controls pristine:", this.form.controls.email.pristine);
console.log("controls touched:", this.form.controls.email);
console.log("controls status:", this.form.controls.email.status);
this.user=this.form.controls.email.value.split('@')[0];
this.showUserName=true;
//var fullName = empmail.split('@')[0].split('.');
//this.user="ad";


  }
}
