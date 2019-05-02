import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
getName=''
onSubmit(form:NgForm){
  
  this.getName=form.value.name
}
msg="Hello....."
  constructor() { }

  ngOnInit() {
  }

}
