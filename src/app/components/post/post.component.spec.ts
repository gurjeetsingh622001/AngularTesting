import { Post } from "src/app/shared/postsService/post.service";
import { PostComponent } from "./post.component"
import { first } from "rxjs";

describe('Post Component', () => {

  let postComponent: PostComponent;
  let post: Post
  beforeEach(() => {
    postComponent = new PostComponent();
    post = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat ",
      "body": "molestiae ut ut quas totam rerum est autem sunt rem eveniet architecto"
    }

  })

  it('should raise an event when the delete post is clicked', () => {
    postComponent.post = post

    postComponent.delete.pipe(first()).subscribe(selectedPost => {
      expect(selectedPost).toEqual(post)
    })
  })

})