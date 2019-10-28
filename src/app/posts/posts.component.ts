import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

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
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
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
   this.postService.deletePost(345).subscribe(
      response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
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
