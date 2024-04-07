import { Publication } from "../consts/enum";

interface PostProps {
  post: Publication
}

function Post(props: PostProps) {
  return (
    <div className="Post">
      <h3> {props.post.title} </h3>
      <p> {props.post.text} </p>
    </div>
  );
}

export default Post;
