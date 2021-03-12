import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    AboutComponent,
    
    ProductsComponent,
    
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
