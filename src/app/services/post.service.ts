import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://ajsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<any[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post) {
    return this.httpClient.post<any>(this.url, JSON.stringify(post)).pipe(
      catchError(this.handleError)
    );
  }

  updatePost(post) {
    return this.httpClient.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(id) {
    return  this.httpClient.delete(this.url + '/' + id).pipe(
     catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
