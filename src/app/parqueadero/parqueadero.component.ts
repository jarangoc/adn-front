import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { ParqueaderoService } from './parqueadero.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { LibretaService } from '../libreta/libreta.service';
import { RegistroParqueadero } from '../libreta/RegistroParqueadero';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html'
})
export class ParqueaderoComponent implements OnInit {

  private vehiculo: Vehiculo = new Vehiculo();

  staticdata: string = 'static data';
  vehiculosEnParqueadero:RegistroParqueadero[];

  constructor(private parqueaderoService: ParqueaderoService, 
    private router:Router, private libretaService: LibretaService) { }

  ngOnInit() {
    this.vehiculo.tipoVehiculo = "Seleccionar..."
  }

  public registrarIngreso(): void {
    this.parqueaderoService.registrarVehiculo(this.vehiculo).subscribe(
      response => {
        this.libretaService.getRegistrosParqueadero().subscribe(
          registros=> this.vehiculosEnParqueadero = registros
        );
        swal.fire('Ingreso vehículo',`Vehículo con placa ${this.vehiculo.placa} ingresado con éxito!`,'success');
        this.limpiarFormulario();
      }
    );
  }

  public limpiarFormulario():void{
    this.vehiculo = new Vehiculo();
    this.vehiculo.tipoVehiculo = "Seleccionar..."
  }

  public retirarVehiculo():void{

    if(this.vehiculo.placa != null && this.vehiculo.placa.length>0){
      swal.fire({
        title: `¿Está seguro de retirar el vehículo con placas ${this.vehiculo.placa} ?`,
        text: "Se generara la liquidación del valor a pagar",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {        
          this.parqueaderoService.retirarVehiculo(this.vehiculo.placa).subscribe(
            response => {
              swal.fire('Salida vehículo',`Vehículo con placa ${this.vehiculo.placa} retirado con éxito!,
              fecha Ingreso:${new Date(response.fechaIngreso).toLocaleString()} fecha Salida:${new Date(response.fechaSalida).toLocaleString()} valor a cobrar: ${response.valorCobrado} `,'success');
              this.limpiarFormulario();
              if(this.vehiculosEnParqueadero != null && this.vehiculosEnParqueadero.length>1) {
                this.libretaService.getRegistrosParqueadero().subscribe(
                  registros=> this.vehiculosEnParqueadero = registros
                );
              }else{
                this.vehiculosEnParqueadero = null;
              }
            }
          );
        }
      })
    }
  }
}