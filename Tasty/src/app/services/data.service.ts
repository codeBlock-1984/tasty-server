import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private orderSource = new BehaviorSubject([]);
  currentOrder = this.orderSource.asObservable();

  constructor() { }

  setOrder(order: any[]) {
    this.orderSource.next(order);
  }
}
