import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
/* import mysql = require('mysql'); */


@Injectable({
  providedIn: 'root'
})
export class ConsultorService {

    constructor(private http: HttpClient) {
        console.log('Clase inicializada');
    }

    consulta(code: string) {
        const consult = {
            code,
            queries: {
                // tslint:disable-next-line:max-line-length
                articulo: 'SELECT codigo, nombre, round(impuesto1,2)as Impuesto, round(factor,2) as FactorCab, round(precio1,2) as PrecioVent, round((precio1 * (impuesto1 / 100)),2) as IVA, round((((impuesto1 / 100)*precio1) + precio1),2) as PrecioTOT, if((factor > 1),(round((preciofin1 / factor),2)),0) as ValorDol FROM articulo WHERE codigo = ',
                alternativo: `SELECT * FROM invcodalternativo WHERE codalternativo = `
            }
        };
        return this.http.post(`http://192.168.1.32:3000/consulta`,  {consult})
            .pipe(
                map(res => {
                    return res;
                })
            );
    }
}
