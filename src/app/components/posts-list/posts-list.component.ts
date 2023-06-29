import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { AppState } from 'src/app/store';
import { postAndUserSelector } from 'src/app/store/selectors/combined/post.user.selectors';

import { postsSelector } from 'src/app/store/selectors/post/post.selectors';
import {User} from "../../models/user";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>;
  postAndUser$: Observable<{post: Post, user: User}[]>;
  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(postsSelector);
    this.postAndUser$ = this.store.select(postAndUserSelector)
  }

  ngOnInit(): void {
  }

}
