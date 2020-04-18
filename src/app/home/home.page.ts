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
  data;
  searching;

  constructor( private barcodeScanner: BarcodeScanner,
               private conService: ConsultorService
               ) { }
  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.codeData = barcodeData.text;

      // tslint:disable-next-line:max-line-length
      this.conService.consulta(`SELECT codigo,
                                      nombre,
                                      round(impuesto1,2)as Impuesto,
                                      round(factor,2) as FactorCab,
                                      round(precio1,2) as PrecioVent,
                                      round((precio1 * (impuesto1 / 100)),2) as IVA,
                                      round((((impuesto1 / 100)*precio1) + precio1),2) as PrecioTOT,
                                      if((factor > 1),(round((preciofin1 / factor),2)),0) as ValorDol
                                      FROM articulo WHERE codigo = ${this.codeData}`)
          .subscribe((resp) => {
            this.data = resp;
          });

    }).catch(err => {
      console.log('Error', err);
    });

  }

}
