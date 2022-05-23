import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { BaseLayoutComponent } from './shared/components/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './shared/components/login/login.component';
import { OnSaleComponent } from './pages/onsale/onsale.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    OnSaleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login',component: LoginComponent },
      {path: 'home', component: HomeComponent },
      {path: 'products',component: ProductsComponent},
      {path: 'onsale',component:OnSaleComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
