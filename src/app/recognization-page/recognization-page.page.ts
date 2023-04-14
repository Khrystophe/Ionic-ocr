import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-recognization-page',
  templateUrl: './recognization-page.page.html',
  styleUrls: ['./recognization-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecognizationPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
