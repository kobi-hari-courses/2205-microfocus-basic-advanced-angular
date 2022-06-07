import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private status: boolean = false;
    private status$ = new BehaviorSubject<boolean>(this.status);

    getStatus(): Observable<boolean> {
        return this.status$.asObservable();
    }

    getUser(): Observable<string> {
        return this.getStatus().pipe(
            map(status => status ? 'Admin' : 'Guest')
        );
    }

    async signIn(): Promise<void> {
        this.status = true;
        this.status$.next(this.status);        
    }

    async signOut(): Promise<void> {
        this.status = false;
        this.status$.next(this.status);        
    }
}