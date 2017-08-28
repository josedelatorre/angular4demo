import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Vehiculo } from '../models/vehiculo';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { VehiculoService } from '../services/vehiculo.service';


@Component({
	selector: 'vehiculo-detail',
	templateUrl: '../views/vehiculo-detail.html'
})
export class VehiculoDetailComponent{
	public vehiculo: FirebaseObjectObservable<any>;
	public vehiculos: FirebaseListObservable<any[]>;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		public db: AngularFireDatabase,
		public vs: VehiculoService
	){}

	ngOnInit(){
		console.log('vehiculo-detail.Component.ts cargado...');
		this.getVehiculo();
	}

	getVehiculo(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this.vehiculo = this.vs.getVehiculo(id);	
		});
	}

}