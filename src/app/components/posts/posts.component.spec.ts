import { Post, PostService } from "src/app/shared/postsService/post.service";
import { PostsComponent } from "./posts.component"
import { EMPTY, of } from "rxjs";

describe('PostsComponent', () => {

  let postsComponent: PostsComponent;
  let mockPostsService: any;
  let POSTS: Post[]
  beforeEach(() => {
    POSTS = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },]
    // mockPostsService = {
    //   getPosts: jasmine.createSpy('getPosts').and.returnValue(of(POSTS)),
    //   deletePost: jasmine.createSpy('deletePost').and.returnValue(of(POSTS))
    // };

    mockPostsService = jasmine.createSpyObj('PostsService', ['getPosts', 'deletePost'])
    mockPostsService.getPosts.and.returnValue(of(POSTS))
    mockPostsService.deletePost.and.returnValue(of(POSTS))
    postsComponent = new PostsComponent(mockPostsService)

  })

  describe('delete', () => {
    beforeEach(() => {
      postsComponent.posts = POSTS
    })
    it('length of posts should decreased when delete method is called', () => {
      postsComponent.delete(POSTS[1]);
      expect(postsComponent.posts.length).toEqual(2)
    })

    it('should remove the actual post from Posts', () => {
      postsComponent.delete(POSTS[2])
      for (let post of postsComponent.posts) {
        expect(post).not.toEqual(POSTS[2])
      }
    })

    it('should call delete method of Post service only once', () => {
      postsComponent.delete(POSTS[1])
      expect(mockPostsService.deletePost).toHaveBeenCalledTimes(1)
    })
  })

})