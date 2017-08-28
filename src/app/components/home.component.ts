import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})
export class HomeComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'SPA para gestión de concesionarios';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
}