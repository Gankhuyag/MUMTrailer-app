import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    apiURL="localhost:9999/api/v1/users"
    getAll() {
        return this.http.get<User[]>("localhost:9999/api/v1/users");
    }

    getById(id: number) {
        return this.http.get("localhost:9999/api/v1/users/"+id);
    }

    register(user: User) {
        return this.http.post("localhost:9999/api/v1/user", user);
    }

    update(user: User) {
        return this.http.put("localhost:9999/api/v1/users/"+user.id, user);
    }

    delete(id: number) {
        return this.http.delete("localhost:9999/api/v1/users/"+id);
    }
}
