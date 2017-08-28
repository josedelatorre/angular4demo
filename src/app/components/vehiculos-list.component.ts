import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Vehiculo } from '../models/vehiculo';
import { FirebaseListObservable } from 'angularfire2/database';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
	selector: 'vehiculos-list',
	templateUrl: '../views/vehiculos-list.html'
})
export class VehiculosListComponent{
	public titulo: string;
    public vehiculos: FirebaseListObservable<any[]>;
	public confirmado;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		public vs: VehiculoService
	){
		this.titulo = 'Listado de vehiculos';
		this.confirmado = null;
	}

	ngOnInit(){
		console.log('vehiculos-list.component.ts cargado');
		this.getVehiculos();
	}

	getVehiculos(){
		this.vehiculos = this.vs.vehiculos;
	}

	borrarConfirm(id){
		this.confirmado = id;
		console.log(id)
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteVehiculo(id){
		this.vs.deleteVehiculo(id);
	}

}