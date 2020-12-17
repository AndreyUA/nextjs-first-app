import Router from "next/router";
import MainLayout from "../../components/MainLayout";

const About = ({ title }) => {
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
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();

  return {
    title: data.title,
  };
};

export default About;
