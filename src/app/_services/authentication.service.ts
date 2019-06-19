import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        const header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZ2FuYm9sZEBtdW0uZWR1IiwidXNlcm5hbWUiOiJiZ2FuYm9sZEBtdW0uZWR1Iiwicm9sZXMiOlsiQURNSU4iXSwiaWQiOjB9.ocp0q3a8ZIpQjnaCJgeKpEPQxXY061h_kr6EDF9Z-GkNA-2_qusNgSa9DmpSkxLhxfuqOvAUR2OOmA5dVTCQrw' })
        return this.http.post<any>("localhost:9999", { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}