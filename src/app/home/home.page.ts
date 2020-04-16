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

  codeData: any;

  constructor( private barcodeScanner: BarcodeScanner,
               private conService: ConsultorService
               ) { }

  scan() {

    const data = this.conService.codeConsultor('8410261172002');
    console.log(data);
    // this.conService.consulta().subscribe(data => console.log(data));

    // const data = await get('articulo', '8410261172002');
    // console.log(data);

    return;
/*
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if ( !barcodeData.cancelled ) {
        // this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text );
      }
      this.codeData = barcodeData.text;

      //const result = this.consultorService.codeConsultor('8410261172002');
      console.log(result);

    }).catch(err => {
      console.log('Error', err);

      // this.dataLocal.guardarRegistro( 'QRCode', 'https://fernando-herrera.com' );
      // this.dataLocal.guardarRegistro( 'QRCode', 'geo:40.73151796986687,-74.06087294062502' );

    });*/

  }

}
