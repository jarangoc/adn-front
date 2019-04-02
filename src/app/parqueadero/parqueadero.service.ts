import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vehiculo} from './vehiculo';
import { of,Observable,throwError } from 'rxjs';
import swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ParqueaderoService {

  private urlEndPointIngreso:string = 'http://localhost:9080/parqueadero/registros';

  private urlEndPointSalida:string = 'http://localhost:9080/parqueadero/registros';

  private httpHeaders = new HttpHeaders({'content-type':'application/json'});

  
  constructor(private http:HttpClient) { }

  registrarVehiculo(vehiculo:Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.urlEndPointIngreso,vehiculo,{headers:this.httpHeaders}).pipe(
      catchError(e => {
          swal.fire({
            type: 'error',
            title: 'Oops...',
            text: e.error
          })
          return throwError(e);
      })
    );
  }

  retirarVehiculo(placa:string){
    return this.http.patch<any>(`${this.urlEndPointSalida}/${placa}`,placa,{headers:this.httpHeaders}).pipe(
      catchError(e => {
          swal.fire({
            type: 'info',
            title: 'Oops...',
            text: e.error,
          })
          return throwError(e);
      })
    );
  }
}
