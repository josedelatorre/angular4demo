import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
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

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductosListComponent},
	{path: 'crear-producto', component: ProductoAddComponent},
	{path: 'producto/:id', component: ProductoDetailComponent},
	{path: 'editar-producto/:id', component: ProductoEditComponent},
	{path: 'vehiculos', component: VehiculosListComponent},
	{path: 'crear-vehiculo', component: VehiculoAddComponent},
	{path: 'vehiculo/:id', component: VehiculoDetailComponent},	
	{path: 'editar-vehiculo/:id', component: VehiculoEditComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);