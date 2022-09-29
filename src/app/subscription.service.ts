import { Injectable } from '@angular/core';
import {  BehaviorSubject, Subject } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { 
  //   wishlistItemcount$ = new Subject<number>();
  //   cartItemcount$ = new Subject<number>();
  //   wishlistItem$ = new BehaviorSubject<Book[]>([]);
  }
}
