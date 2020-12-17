import "../css/main.scss";
import NextNprogress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
      {/**
       <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
       */}
    </>
  );
}
