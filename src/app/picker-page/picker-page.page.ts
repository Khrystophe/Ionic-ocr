import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import * as Tesseract from 'tesseract.js';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-picker-page',
  templateUrl: './picker-page.page.html',
  styleUrls: ['./picker-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class PickerPagePage {
  constructor(private router: Router) {
    this.loadWorker();
  }

  public goToHomePage(): void {
    this.router.navigate(['/home']);
  }
  resetPage() {
    this.imageSelected = false;
    this.resultDisplayed = false;
    this.image = '../../assets/icon/search.jpg';
    this.ocrResult = '';
  }

  worker!: Tesseract.Worker;
  image: string = '../../assets/icon/search.jpg';
  imageSelected: boolean = false;
  resultDisplayed: boolean = false;
  workerReady = false;
  ocrResult = '';
  captureProgress = 0;

  async loadWorker() {
    this.worker = await Tesseract.createWorker({
      logger: (progress) => {
        console.log(progress);
        if (progress.status === 'recognizing text') {
          this.captureProgress = parseInt('' + progress.progress * 100);
        }
      },
      workerPath: 'assets/tesseract/worker.min.js',
      langPath: 'assets/tesseract/fra.traineddata',
      corePath: 'assets/tesseract/tesseract-core.wasm.js',
    });
    await this.worker.loadLanguage('fra');
    await this.worker.initialize('fra');
    console.log('FIN');
    this.workerReady = true;
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    console.log('image: ', image);

    this.image = image.dataUrl || 'Erreur';
    this.imageSelected = true;
  }
  async importImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });
    console.log('image: ', image);

    this.image = image.dataUrl || 'Erreur';
    this.imageSelected = true;
  }
  async recognizeImage() {
    const result = await this.worker.recognize(this.image);
    console.log(result);
    this.ocrResult = result.data.text;
    this.resultDisplayed = true;
  }
}
