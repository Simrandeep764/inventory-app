import { Component, OnInit } from '@angular/core';
import { CalService } from '../cal.service';

@Component({
  selector: 'app-bil',
  templateUrl: './bil.component.html',
  styleUrls: ['./bil.component.css']
})
export class BilComponent implements OnInit {

  serverElements=[];
  price1:string="";
  price2:string="";
  price3:string;
  price4:string;
  totalbill:number;
  name:String="";
    valid:boolean;
    total:number;
  constructor(public obj:CalService) { }

  ngOnInit() {
  }
  checkValid()
  {
    if(this.price1 && this.price2 && this.price3 && this.price4!="")
    this.generate();
  }
  generate()
  {
      this.totalbill=this.obj.cal(parseInt(this.price3),parseInt(this.price4));
      this.serverElements.push({
        type:'server',
        name:this.price1,
        name1:this.price2,
        pr1:this.price3,
        pr2:this.price4,
        total:this.totalbill

      });
 
  }

}
