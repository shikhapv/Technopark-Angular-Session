import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule } from '@angular/forms';
  



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { StudentComponent } from './student/student.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ApiserviceService} from './apiservice.service';
import { UserslistComponent } from './userslist/userslist.component';
import { HttpModule } from '@angular/http';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'counter',component:CounterComponent},
  {path:'student',component:StudentComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'userslist',component:UserslistComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    CounterComponent,
    StudentComponent,
    WelcomeComponent,
    UserslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [NavbarComponent,MainComponent]
})
export class AppModule { }
