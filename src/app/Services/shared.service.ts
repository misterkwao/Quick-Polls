import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sharedData = new BehaviorSubject<string>('Initial Value');
  sharedData$ = this.sharedData.asObservable();

  getUser(data: string) {
    this.sharedData.next(data);
  }
}
