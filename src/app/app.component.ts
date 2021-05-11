import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularproject1';

  quantity:number=1
  DisableMinus:Boolean=false; 

  i=1;
  QuantityPlus(){
      this.i++;
      this.quantity=this.i;

      if(this.i!=0){
       this.DisableMinus=false;
      }
  }

  QuantityMinus(){
    this.i--;
    this.quantity=this.i;
    
    if(this.i==0){
      this.quantity=0;
     this.DisableMinus=true;

    }
      

    
  }
}


