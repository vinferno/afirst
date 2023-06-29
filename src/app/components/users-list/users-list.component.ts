import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store';
import { loadPosts } from 'src/app/store/actions/post/post.actions';
import { loadUsers } from 'src/app/store/actions/user/user.actions';
import { usersSelector, loadingUsersSelector, userErrorMessageSelector, firstUserSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  title = 'ngrx-angular1';
  users$: Observable<User[]>;
  loadingUsers$: Observable<boolean>;
  userErrorMsg$: Observable<string>;
  firstUser$: Observable<User | undefined>;

  constructor( private store: Store<AppState>) {
    // this.store.dispatch(loadUsersSuccess({data: [{id: 3, name: 'Minni'}]}))
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPosts());
    this.users$ = this.store.select(usersSelector);
    this.loadingUsers$ = this.store.select(loadingUsersSelector);
    this.userErrorMsg$ = this.store.select(userErrorMessageSelector);
    this.firstUser$ = this.store.select(firstUserSelector)
  }

  ngOnInit(): void {
  }

}
