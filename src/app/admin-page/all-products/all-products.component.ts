import { Component, OnInit } from '@angular/core';
import { adminservice } from 'src/app/Service/admin.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productArray : any[]=[];
  imagUrlProduct: string = 'https://furniture-eg.herokuapp.com/uploads/product/';
  activetedRoute: any;
  productId: any;
  
  constructor(
    private _service : adminservice , 
    private rout : Router,
   
    ) { 

     
    }
 
  removeProdItem(id: any): void {
    this._service.deleteProduct(id).subscribe(res => {
      console.log(res);
      this.productArray = this.productArray.filter(item => item.id !== id);
      })
    
  }
  ngOnInit(): void {
    this._service.getAllProduct()
    .subscribe((data: any) => {
      this.productArray = data.products;
      console.log(this.productArray)
    }, (err: any) => {
      console.log(err)
    }); 
  }
 
}



