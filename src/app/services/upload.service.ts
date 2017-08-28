import * as firebase from 'firebase'; 
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Upload } from '../models/upload';
import { Vehiculo } from '../models/vehiculo';

@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }

  private basePath:string = '/uploads';
  private uploadTask: firebase.storage.UploadTask;
  uploads: FirebaseListObservable<any[]>;
  uploadURL:string;

  pushUpload(upload: Upload, vehiculos: FirebaseListObservable<any[]>, vehiculo: Vehiculo) {
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes) * 100
        console.log('Subiendo imagen... ' + upload.progress + '%')
    },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = this.uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        console.log('Imagen subida y disponible en ' + this.uploadTask.snapshot.downloadURL)  
        
        // subiendo el vehiculo a la realtime db
        vehiculo.imagen = upload.url 
        vehiculos.push(vehiculo)     
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

}