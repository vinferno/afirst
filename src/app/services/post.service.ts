import { Injectable } from '@angular/core';
import { Post } from '../models/posts';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private api: ApiService,
  ) { }

  getAllPosts() {
    return this.api.get<Post[]>('posts')
  }
}
