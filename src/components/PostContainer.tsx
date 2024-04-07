import { ReactElement } from 'react';

import { Publication } from '../consts/enum';
import Post  from './Post';
import { PostService } from '../api/posts';

function PostContainer(): ReactElement {

  const postService = new PostService();
  
  postService.getPosts().then(res => {
    console.log(res);
  })
  const posts: Publication[] = [
    { id: 'some-id', readingTime: '1min', createdAt: new Date(), lastUpdatedAt: new Date(), title: 'What is Lorem Ipsum?', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
  ] 
  
  const Posts: JSX.Element[] = [];

  posts.forEach((post) => {
    Posts.push(<Post key={post.id} post={post} />);
  });

  return (
    <div className="PostContainer">
      { Posts }
    </div>
  );
}

export default PostContainer;
