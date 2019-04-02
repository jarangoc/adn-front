import { Component, Input } from '@angular/core';
import {RegistroParqueadero} from './RegistroParqueadero'
import {LibretaService} from './libreta.service';


@Component({
  selector: 'app-libreta',
  templateUrl: './libreta.component.html',
})
export class LibretaComponent {
  @Input() staticdata: string;
  @Input() vehiculosEnParqueadero:RegistroParqueadero[];

  habilitar:boolean = true;
  constructor(private libretaService: LibretaService) { }

  setHabilitar() {
    (this.habilitar)? this.habilitar = false: this.habilitar =true ;
  }

  ngOnInit(): void {
     this.libretaService.getRegistrosParqueadero().subscribe(
       registros=> this.vehiculosEnParqueadero = registros
     );
    
  }
}
