import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class LoginComponent {
    public form: FormGroup
    public error:any
    constructor(private fb: FormBuilder, private route: Router, private auth: ServiceService) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            remember: ['', Validators.required]
        })
    }


    submit() {
        console.log(this.form.value, 'submitsubmit')
        if (this.form.valid) {
            localStorage.setItem('rember',this.form.value.remember)
            this.auth.login({
                email: this.form.value.email,
                password: this.form.value.password,
            }).subscribe(res => {
                console.log(res, 'this.form.valid')
                if(res){
                    this.route.navigate(['/product'])
                }
            })
           

        }else{
            this.error= 'Please Enter Login Details'
        }
    }
}
