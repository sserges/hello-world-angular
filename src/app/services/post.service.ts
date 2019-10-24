import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://ljsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<any[]>(this.url);
  }

  createPost(post) {
    return this.httpClient.post<any>(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.httpClient.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return  this.httpClient.delete(this.url + '/' + id);
  }
}
