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
        return this.http.post(`http://192.168.1.32:3000/consulta`, { consult: code })
            .pipe(
                map(res => {
                    return res;
                })
            );
    }
}
