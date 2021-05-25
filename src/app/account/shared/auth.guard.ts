import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// Obtem token do localStorage
		const token = window.localStorage.getItem('token');

		// Se token presente, retorna true, se não false 
		// (Posteriormente implementar aqui uma validação do token para  saber se esta presente e se esta ativo)
		if (token) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}
