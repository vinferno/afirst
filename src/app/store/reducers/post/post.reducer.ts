import { Action, createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { loadPosts, loadPostsSuccess } from '../../actions/post/post.actions';


export const postFeatureKey = 'post';

export interface State {
  posts: Post[]

}

export const initialState: State = {
  posts: []
};


export const reducer = createReducer<State>(
  initialState,
  on(loadPostsSuccess, (state, action): State => {
    return {...state, posts: action.data}
  })

);


