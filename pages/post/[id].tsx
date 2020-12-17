import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost;
}

const Post = ({ post: serverPost }: PostPageProps) => {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `${process.env.API_ULR}/posts/${router.query.id}`
      );
      const data = await response.json();

      setPost(data);
    };

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout title={`Post number ${router.query.id}`}>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`Post number ${router.query.id}`}>
      <h1>Post number {router.query.id}</h1>
      <h2>Post title: {post.title}</h2>
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to posts page</a>
      </Link>
    </MainLayout>
  );
};

// расширяем интерфейс через наследование от
// основного интерфейса
interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

// работает на бек-енде и фронт-енде
//Post.getInitialProps = async (ctx) => {
Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const response = await fetch(`${process.env.API_ULR}/posts/${query.id}`);
  const post: MyPost = await response.json();

  return { post };
};

// работает ТОЛЬКО на бек-енде
{
  /*
  export async function getServerSideProps({ query, req }) {

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return { props: { post } };
}
*/
}

export default Post;
