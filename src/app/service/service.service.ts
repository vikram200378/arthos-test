import { Injectable, isStandalone } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { enviroment } from 'src/enviroment/enviroment';
import { urls } from '../contants/api-urls';
import { map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
 
})
export class ServiceService {

  constructor(private http:HttpClient) { 


  }

  login(body:any){
    return this.http.post<any>(enviroment.api + urls.login, {...body}).pipe(map(user =>{
      return user
    }))}

}
