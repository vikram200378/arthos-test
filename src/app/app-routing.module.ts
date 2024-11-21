import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login';
import { ProductComponent } from './product/product';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  }, {
    path: 'product',
    component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
