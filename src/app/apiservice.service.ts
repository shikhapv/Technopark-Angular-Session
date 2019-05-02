import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:Http) { }

  getServerData():any{

    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(
      (response:Response)=> response.json()
    )
  }
}
