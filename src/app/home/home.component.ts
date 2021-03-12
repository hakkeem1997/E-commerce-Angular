import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  count = 0;
  pl: any;
  qty:any;
  prices:any;
  
  constructor() {
    let im = localStorage.getItem('li');
    if (im) {
      this.products = JSON.parse(im);
    }
  }
  ngOnInit(): void {
  }
  addcart(){
    let quan=this.prices * this.qty;
  }
   add(i: any) {
    this.pl = this.products[i];
    console.log(this.pl);
  }
  sub() {
    this.count = 1;
    this.count--;
  } 

  

}
