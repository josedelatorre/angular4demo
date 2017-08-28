import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Vehiculo } from '../models/vehiculo';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class VehiculoService{

    public vehiculos: FirebaseListObservable<any[]>;
 
    constructor(
        public db: AngularFireDatabase
    ){ 
		this.vehiculos = this.db.list('/vehiculos');  
    }

    public getVehiculo(id:string):FirebaseObjectObservable<any>{
        return this.db.object('/vehiculos/'+id);
    }

    public deleteVehiculo(id:string){
        this.getVehiculo(id).remove();
    }
}