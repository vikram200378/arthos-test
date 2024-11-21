import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './product.html',
    styleUrls: ['./product.scss']
})
export class ProductComponent {
  
}
