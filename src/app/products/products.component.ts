import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  prct:any;
  products:any=[];
  price:any;
  descript:any;
  identifier:any;

  constructor() { 
    let im=localStorage.getItem('li');
    if (im){
      this.products=JSON.parse(im);
      // console.table(this.products)
    }

  }  
 
  

  toadd(){
    let a={
      product:this.prct,
      description:this.descript,
      prices:this.price,
      idy:this.identifier
     
    }
   
    this.products.push(a);
    console.log(this.products)
   localStorage.setItem('li',JSON.stringify(this.products))
  

}
  ngOnInit(): void {
  }
 
}
