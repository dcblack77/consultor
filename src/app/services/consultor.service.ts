import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import mysql = require('mysql');


@Injectable({
  providedIn: 'root'
})
export class ConsultorService {

    cnn: mysql.Connection;
    conectado = false;

    constructor(private http: HttpClient) {
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: '192.168.1.16',
            user: 'root',
            password: '10043829',
            database: 'admincrc001'
        });

        this.cnn.connect((err: any) => {

            if (err) {
                console.log(err.message, 'Error conectando db');
                return;
            }

            this.conectado = true;
            console.log('DB Online');

        });
    }

    consulta() {
 /*       return this.http.get(`https://restcountries.eu/rest/v2/all`)
            .pipe(
            map(res => res)
        );*/
       /* return this.http.get(`mysqlx://root:20773651.ddcr@localhost:3306/networkingslides/SELECT+%2A+FROM+aforo`).pipe(
            map(res => res)
        );*/
        /*password: BLw5yc4fAQ
        username: BkmIsEeFdZ
        database: BkmIsEeFdZ*/
    }
/*
    funcionInservible() {

        console.log('Pase el crear coneccion');

    }
*/
    ejecutarQuery(query: string, callback) {
        this.cnn.query(query, (err, results: [], fields) => {

            if (err) {
                console.log('Error en la query');
                console.log(err);
                return callback(err);
            }

            if (results.length === 0) {
                return callback('El registro solicitado no existe');
            } else {
                return callback(null, results);
            }
        });
    }

    codeConsultor(codigo: string): any {
        const query = `
            SELECT *
            FROM articulo WHERE codigo = ${codigo}`;

        this.ejecutarQuery(query, (err: any, articulo: []) => {
            if (err) {  return err; }
            return articulo;
        });
        this.cnn.query(`SELECT * FROM articulo WHERE codigo = ${codigo}`, (error, results) => {
            if (error) { throw error; }
            return results;
        });
    }
}
