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

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'counter',component:CounterComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [NavbarComponent,MainComponent]
})
export class AppModule { }
