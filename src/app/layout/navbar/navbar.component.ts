import { ToastService } from './../toast.service'; // Importing a custom Toast service
import { Component, inject, OnInit } from '@angular/core'; // Importing Angular core modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importing FontAwesome module
import { ButtonModule } from 'primeng/button'; // Importing PrimeNG Button module
import { ToolbarModule } from "primeng/toolbar"; // Importing PrimeNG Toolbar module
import { MenuModule } from "primeng/menu"; // Importing PrimeNG Menu module
import { CategoryComponent } from './category/category.component'; // Importing Category component
import { AvatarComponent } from './avatar/avatar.component'; // Importing Avatar component
import { DialogService } from "primeng/dynamicdialog"; // Importing PrimeNG Dialog service
import { MenuItem } from 'primeng/api'; // Importing MenuItem type from PrimeNG

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule, // PrimeNG Button module
    FontAwesomeModule, // FontAwesome icons
    ToolbarModule, // PrimeNG Toolbar module
    MenuModule, // PrimeNG Menu module
    CategoryComponent, // Including CategoryComponent
    AvatarComponent // Including AvatarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], // Specifying the SCSS file for styles
  providers: [DialogService] // Providing DialogService for dependency injection
})
export class NavbarComponent implements OnInit {
  location = "where"; // Default text for location input
  guests = "Add guests"; // Default text for guests input
  dates = "Any week"; // Default text for dates input

  toastService = inject(ToastService); // Injecting the custom ToastService

  ngOnInit(): void {
    this.fetchMenu(); // Fetch the menu items on component initialization
    this.toastService.send({ severity: "success", summary: "success message" }); // Displaying a success toast message
  }

  private fetchMenu(): MenuItem[] {
    return [
      {
        label: "Sign up", // Label for the "Sign up" menu item
        styleClass: "font-bold", // Apply bold font style to this menu item
      },
      {
        label: "Log in", // Label for the "Log in" menu item
      }
    ];
  }

  currentMenuItems: MenuItem[] | undefined = []; // Define a property to hold menu items
}





  // login = () => this.authService.login();

  // logout = () => this.authService.logout();
    // connectedUser: User = {email: this.authService.notConnected};
