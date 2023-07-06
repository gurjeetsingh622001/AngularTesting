import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post, PostService } from 'src/app/shared/postsService/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: Post[] = []
  constructor(private postService: PostService,) {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  delete(post: Post) {
    this.posts = this.posts.filter((postObj: Post) => {
      return postObj.id !== post.id
    })
    this.postService.deletePost(post).subscribe()
  }

}
