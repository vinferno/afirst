import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as postFeature from './../../reducers/post/post.reducer';

const postFeatureSelector = createFeatureSelector<AppState, postFeature.State>(postFeature.postFeatureKey);


export const postsSelector = createSelector(
  postFeatureSelector,
  (postState) => {
    return postState.posts;
  }
)
