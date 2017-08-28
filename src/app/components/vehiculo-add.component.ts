import { Component } from '@angular/core';
import { Vehiculo } from '../models/vehiculo'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload';

@Component({
	selector: 'vehiculo-add',
	templateUrl: '../views/vehiculo-add.html'
})
export class VehiculoAddComponent{	
    public titulo: string;
    public vehiculo: Vehiculo;
    public vehiculos: FirebaseListObservable<any[]>;
    public selectedFiles: FileList;
    public currentUpload: Upload;
    
    constructor(public db: AngularFireDatabase, private upSvc: UploadService){
        this.titulo = "Crear un nuevo vehículo";
        this.vehiculo = new Vehiculo("","","",0,"");
        this.vehiculos = db.list('/vehiculos')
    }

    crearVehiculo = () => {
        console.log(this.vehiculo);

        if(this.selectedFiles != undefined){
            this.uploadSingle();
            this.vehiculo.imagen = this.upSvc.uploadURL
        }

        this.vehiculos.push(this.vehiculo)
    }

    fileChangeEvent(event) {
        console.log(event.target.files)
        this.selectedFiles = event.target.files;
    }
    uploadSingle() {
      let file = this.selectedFiles.item(0)
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload, this.vehiculos, this.vehiculo)
    }

}