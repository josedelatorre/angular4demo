import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import { VehiculoAddComponent } from './components/vehiculo-add.component';
import { VehiculosListComponent } from './components/vehiculos-list.component';
import { VehiculoDetailComponent } from './components/vehiculo-detail.component';
import { VehiculoEditComponent } from './components/vehiculo-edit.component';

// Servicios

import { UploadService } from './services/upload.service';
import { VehiculoService } from './services/vehiculo.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoEditComponent,
    VehiculoAddComponent,
    VehiculosListComponent,
    VehiculoDetailComponent,
    VehiculoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    appRoutingProviders,
    UploadService,
    VehiculoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
