import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, tap, mergeMap, map } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { loadPosts, loadPostsFailure, loadPostsSuccess } from '../../actions/post/post.actions';



@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadPosts),
    mergeMap(() => this.postService.getAllPosts()
      .pipe(
        tap((data) => console.log(data)),
        map(data => (loadPostsSuccess({data}))),
        catchError((error: Error) => {
          console.log('error getting posts')
          return of(loadPostsFailure({error}))
        })
      ))
    )
  );


  constructor(private actions$: Actions, private postService: PostService) {}

}
