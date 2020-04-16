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

    consulta(code: any) {
       return this.http.get(`http://localhost:3000/consultor/${code}`)
            .pipe(
            map(res => res)
        );
    }
}
