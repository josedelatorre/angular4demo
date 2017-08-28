import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';
import { GLOBAL } from '../services/global';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
	selector: 'vehiculo-edit',
	templateUrl: '../views/vehiculo-add.html'
})
export class VehiculoEditComponent{
	public titulo: string;
	public vehiculo: Vehiculo;
	public filesToUpload;
	public resultUpload;
	public is_edit;
	public selectedFiles: FileList;
	public currentUpload: Upload;
	public imgChanged;

	constructor(
		private vs: VehiculoService,
		private _route: ActivatedRoute,
		private _router: Router, 
		private upSvc: UploadService
	){
		this.titulo = 'Editar vehiculo';
		this.imgChanged = false;
		this.vehiculo = new Vehiculo("","","",0,"");

		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this.vs.getVehiculo(id).subscribe( v => {
				this.vehiculo = v;
			});
		});

		this.is_edit = true;
	}

	ngOnInit(){
		console.log(this.titulo);
	}

	crearVehiculo(){
		if(this.selectedFiles != undefined && this.imgChanged){
            this.uploadSingle();
            this.vehiculo.imagen = this.upSvc.uploadURL
		}
		
		this.updateVehiculo();
	}

	updateVehiculo(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			console.log(this.vehiculo)
			this.vs.getVehiculo(id).set(this.vehiculo);			
		});
	}

	fileChangeEvent(event) {
		this.imgChanged = true;
        console.log(event.target.files)
        this.selectedFiles = event.target.files;
    }
    uploadSingle() {
      let file = this.selectedFiles.item(0)
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload, this.vs.vehiculos, this.vehiculo)
    }
}