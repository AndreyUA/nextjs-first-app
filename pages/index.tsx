import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/MainLayout";

const Index = () => {
  return (
    <MainLayout title="Home">
      <h1>hello</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
      <p>asdasdasd dfgdfg dsfgdfgdfg zzxcxcxcxc!</p>
    </MainLayout>
  );
};

export default Index;
