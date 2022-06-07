import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router
    ){}

 async  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

      const isLoggedIn = await firstValueFrom(this.authService.getStatus());
      
      if (isLoggedIn) return true;

      const targetUrl = state.url;
      const onSuccesfullLogin$ = this.authService.getStatus().pipe(
        filter(val => val === true), 
        take(1)
      );

      onSuccesfullLogin$.subscribe(_ => {
        this.router.navigateByUrl(targetUrl);
      });


      return this.router.createUrlTree(['account']);
      
  }
  
}
