import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalService {
  tax:number;
  sum:number;
  c:number;

  cal(a:number,b:number)
  {
    this.c=a+b;
    this.tax=this.c*0.20;
    this.sum=this.tax+this.c;
    return this.sum;

  }
  constructor() { }
}
