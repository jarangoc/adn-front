import { Injectable } from '@angular/core';
import { RegistroParqueadero } from './RegistroParqueadero';
import {REGISTROS_PARQUEADERO} from './RegistrosParqueadero.json'
import { of,Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable()
export class LibretaService {

  private urlEndPoint:string = 'http://localhost:9080/parqueadero/vehiculos';

  constructor(private http:HttpClient) { }

  getRegistrosParqueadero(): Observable<RegistroParqueadero[]> {
    return this.http.get<RegistroParqueadero[]>(this.urlEndPoint).pipe(
      catchError(e => {
          swal.fire({
            type: 'info',
            title: 'Oops...',
            text: e.error
          })
          return throwError(e);
      })
    );
  }
}
