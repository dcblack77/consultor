import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {ConsultorService} from '../services/consultor.service';
import {log} from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  codeData: string;

  constructor( private barcodeScanner: BarcodeScanner,
               private conService: ConsultorService
               ) { }

  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.codeData = barcodeData.text;

      const result = this.conService.consulta(this.codeData).subscribe();
      console.log(result);

    }).catch(err => {
      console.log('Error', err);

    });

  }

}
