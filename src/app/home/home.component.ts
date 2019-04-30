import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  status=false;
  clicked=false;
  onButtonclick(){
   if(this.clicked==true)
     this.clicked=false;
   
   else
      this.clicked=true;
  }
  getStatus()
  {
    return this.status;
  }


  constructor() {

    setTimeout(() => {
      this.status=true;
     }, 5000);
   }

    ngOnInit() {
   }

}
