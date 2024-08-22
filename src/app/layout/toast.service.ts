import { Injectable } from '@angular/core'; // Importing Angular's Injectable decorator
import { BehaviorSubject } from 'rxjs'; // Importing BehaviorSubject from RxJS
import { Message } from 'primeng/api'; // Importing Message interface from PrimeNG API

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class ToastService {

  INIT_STATE = "INIT"; // Initial state string for toast messages

  // BehaviorSubject to manage the current toast message state, initialized with a default message
  private send$ = new BehaviorSubject<Message>({ summary: this.INIT_STATE });
  
  // Observable for components to subscribe to and receive toast messages
  sendSub = this.send$.asObservable();

  // Method to send a new toast message
  public send(message: Message): void {
    this.send$.next(message); // Updates the BehaviorSubject with the new message
  }
}