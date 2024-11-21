import { Component } from '@angular/core';
import { LoginComponent } from './auth/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route:Router){
    const remember =  localStorage.getItem('rember');
     console.log(remember,'remember')
        if(remember == 'true'){

            this.route.navigate(['/product'])
        }else{
            this.route.navigate(['/'])
        }
  }
}
