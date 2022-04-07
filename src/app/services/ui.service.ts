import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
   private showAddTAsk: boolean = false;

   private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    console.log(123)
    this.showAddTAsk = !this.showAddTAsk;
    console.log(this.showAddTAsk)
    this.subject.next(this.showAddTAsk)
  }


  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

