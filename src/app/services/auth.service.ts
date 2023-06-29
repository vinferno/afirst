import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Post } from '../models/posts';
import { User } from '../models/user';
import { ValidationUser } from '../models/valiidation-user.models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService,
  ) { }

  login(vUser: ValidationUser) {
    return this.api.get<User[]>('users').pipe(
    map( (data) => {
      const loggedInUser = data.find(user => user.username === vUser.username);

      if (loggedInUser) {
        return loggedInUser;
      } else {
        throw new Error("No User Found");
      }

    })
    )
  }
}
