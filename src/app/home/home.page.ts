import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule],
})
export class HomePage {
  constructor(private router: Router) {}

  public goToPickerPage(): void {
    this.router.navigate(['/picker-page']);
  }
  public goToPage(): void {
    // a faire
  }

  public goToLoginPage(): void {
    this.router.navigate(['/login']);
  }
}
