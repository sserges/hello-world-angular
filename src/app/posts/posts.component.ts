import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get<any[]>(this.url).subscribe(
      response => {
        this.posts = response;
      }
    );
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.http.post<any>(this.url, JSON.stringify(post)).subscribe(
      response => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        // console.log(response);
      }
    );
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  ngOnInit() {
  }

}
