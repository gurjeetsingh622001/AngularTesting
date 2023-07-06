import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/shared/postsService/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post | undefined;
  @Output() delete = new EventEmitter<Post>();

  onDeletePost(event: Event) {
    event.preventDefault();
    this.delete.emit(this.post);
  }

}
