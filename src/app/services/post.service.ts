import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

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
    return  this.httpClient.delete(this.url + '/' + id).pipe(
     catchError(
      (error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error));
      }
     )
    );
  }
}
