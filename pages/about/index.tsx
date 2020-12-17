import Router from "next/router";
import MainLayout from "../../components/MainLayout";

interface MyAbout {
  title: string;
}

const About = ({ title }: MyAbout) => {
  const clickHandler = () => {
    Router.push("/posts");
  };

  return (
    <MainLayout title="About">
      <h1>{title}</h1>

      <button onClick={() => Router.push("/")}>Home</button>
      <button onClick={clickHandler}>Posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_ULR}/about`);
  const data = await response.json();

  return {
    title: data.title,
  };
};

export default About;
