import { NextPageContext } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";

import MainLayout from "../components/MainLayout";
import { MyPost } from "../interfaces/post";

interface PostsPageProps {
  posts: MyPost[];
}

const Posts = ({ posts: serverPosts }: PostsPageProps) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`${process.env.API_ULR}/posts`);
      const json = await response.json();

      setPosts(json);
    };

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout title="Posts">
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Posts">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch("http://localhost:4200/posts");
  const posts: MyPost[] = await response.json();

  return {
    posts,
  };
};

export default Posts;
