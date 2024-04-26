import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
    //  name1="Pavani"
    /*addToCart: number= 0;
    product ={
    name :'iPhone 13',
    price : 989,
    color: 'Red',
    discount1: 8.,
    discount2: 4.5, 
    inStock : 3,
    pImage:  "/assets/images/images.jpeg"
    }
    
    getDiscountedPrice(){
       return this.product.price-(this.product.price*this.product.discount2/ 100)
    }

    onNameChange(event:any){
      this.name1=event.target.value
      
    }

    decrementCartValue(){
      if(this.addToCart>0){
        this.addToCart--;
      }
    }

    incrementCartValue(){
      if(this.addToCart<this.product.inStock){
        this.addToCart++;
      }
    }*/

    listOfString : string[]=['Pavani', 'Vijay', 'Vamshi', 'Dileep']

}
