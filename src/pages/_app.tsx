import type { AppProps } from "next/app";
import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
    // router.replace("/test");
    // router.back("/test");
  };

  useEffect(() => {
    router.prefetch("/test");
  }, [router]);

  return (
    <>
      <header style={{ display: "flex", gap: 10 }}>
        <Link href={"/"}>Home</Link>
        <Link href={"/search"} prefetch={false}>
          Search
        </Link>
        <Link href={"/book/1"}>Book</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
