import Link from "next/link";
import MainLayout from "../components/MainLayout";
import classes from "../css/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout title="Error">
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please{" "}
        <Link href="/">
          <a>go back</a>
        </Link>{" "}
        to safety
      </p>
    </MainLayout>
  );
}
