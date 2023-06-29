import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store';
import { loadPosts } from './store/actions/post/post.actions';
import { loadUsers } from './store/actions/user/user.actions';
import { firstUserSelector, loadingUsersSelector, userErrorMessageSelector, usersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-angular1';
  users$: Observable<User[]>;
  loadingUsers$: Observable<boolean>;
  userErrorMsg$: Observable<string>;
  firstUser$: Observable<User | undefined>;

  constructor( private store: Store<AppState>) {
    // this.store.dispatch(loadUsersSuccess({data: [{id: 3, name: 'Minni'}]}))
    this.store.dispatch(loadUsers());
    // this.store.dispatch(loadPosts());
    this.users$ = this.store.select(usersSelector);
    this.loadingUsers$ = this.store.select(loadingUsersSelector);
    this.userErrorMsg$ = this.store.select(userErrorMessageSelector);
    this.firstUser$ = this.store.select(firstUserSelector)
  }
}
