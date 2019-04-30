import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  getName=''
  getMob=''
  getEmail=''
  getMsg=''


  onSubmit(form:NgForm){

console.log(form.value)


 this.getName=form.value.usr
 this.getMob=form.value.mob
 this.getEmail=form.value.email
 this.getMsg=form.value.msg
  }

  constructor() { }

  ngOnInit() {
  }

}
