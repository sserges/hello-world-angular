import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];


  constructor(private postService: PostService) {
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.postService.createPost(post).subscribe(
      response => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        // console.log(response);
      }
    );
  }

  updatePost(post) {
    this.postService.updatePost(post).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  deletePost(post) {
   this.postService.deletePost(post.id).subscribe(
      response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
      }
    );
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }

}
