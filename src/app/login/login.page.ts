import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // Import du RouterModule pour utiliser le Router

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule], // Ajout du RouterModule
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {} // Injection du Router dans le constructeur

  login() {
    this.router.navigate(['/home']);
  }

  forgotPassword() {
    // Fonction forgotPassword à implémenter
  }

  authenticate() {
    // Fonction authenticate à implémenter
  }
}
