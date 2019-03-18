import { Injectable } from '@angular/core';
import { RegistroParqueadero } from './RegistroParqueadero';
import {REGISTROS_PARQUEADERO} from './RegistrosParqueadero.json'
import { of,Observable } from 'rxjs';

@Injectable()
export class LibretaService {

  constructor() { }

  getRegistrosParqueadero(): Observable<RegistroParqueadero[]> {
    return of(REGISTROS_PARQUEADERO);
  }
}
