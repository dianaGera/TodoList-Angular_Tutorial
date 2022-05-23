import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showHistory: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleHistory(): void {
    this.showHistory = !this.showHistory
    this.subject.next(this.showHistory)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
