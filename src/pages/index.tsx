import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BrightUI</title>
      </Head>

      <h1 className="title">Welcome to BrightUI</h1>

      <h2>
        <Link href="/dashboard">Dashboard</Link>
      </h2>

      <h2>
        <Link href="/migrate">Migrate</Link>
      </h2>

      <h2>
        <Link href="/profile">Profile</Link>
      </h2>

      <h2>
        <Link href="/sports">Sports</Link>
      </h2>
    </>
  );
}
