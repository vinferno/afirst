import { createSelector } from "@ngrx/store";
import { Post } from "src/app/models/posts";
import { User } from "src/app/models/user";
import { postsSelector } from "../post/post.selectors";
import { usersSelector } from "../user/user.selectors";

export const postAndUserSelector = createSelector(
  postsSelector,
  usersSelector,
  (posts, users ) => {
    return posts.map(post => {

      return {post, user: users.find(user => user.id === post.userId) as User}
    });

  }
)

const postAUserWhereIdIsLessThanThreeSelector = createSelector(
  postAndUserSelector,
  (postAndUser) => {
    return postAndUser.filter( pu => {
      return pu.post.id < 3 && pu.user.id < 3
    })
  }
)
