import { Component, inject, OnInit } from '@angular/core'; // Importing Angular core modules
import { RouterOutlet } from '@angular/router'; // For routing and navigation
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importing FontAwesome related modules
import { MessageService } from 'primeng/api'; // Importing PrimeNG Message service
import { ButtonModule } from 'primeng/button'; // Importing PrimeNG Button module
import { ToastModule } from "primeng/toast"; // Importing PrimeNG Toast module
import { FooterComponent } from './layout/footer/footer.component'; // Importing Footer component
import { NavbarComponent } from './layout/navbar/navbar.component'; // Importing Navbar component
import { ToastService } from './layout/toast.service'; // Importing a custom Toast service
import { fontAwesomeIcons } from './shared/font-awesome-icons'; // Importing custom FontAwesome icons

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // To handle routing
    ButtonModule, // To use PrimeNG buttons
    FontAwesomeModule, // To use FontAwesome icons
    NavbarComponent, // Navbar component inclusion
    FooterComponent, // Footer component inclusion
    ToastModule // To display toast notifications
  ],
  providers: [MessageService], // Making MessageService available for dependency injection
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary); // Injecting FontAwesome icon library
  isListingView = true; // Boolean to manage view state
  toastService = inject(ToastService); // Injecting custom Toast service
  messageService = inject(MessageService); // Injecting PrimeNG MessageService

  ngOnInit(): void {
    this.initFontAwesome(); // Initialize FontAwesome icons
    this.listenToastService(); // Setup listener for toast notifications
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons); // Adding custom icons to the FontAwesome library
  }

  private listenToastService() {
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if (newMessage && newMessage.summary !== this.toastService.INIT_STATE) {
          this.messageService.add(newMessage); // Show the toast notification
        }
      }
    });
  }
}