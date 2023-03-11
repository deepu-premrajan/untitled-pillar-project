import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>This is the dashboard page</h1>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </>
  );
}
