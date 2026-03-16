import { useRouter } from "next/router";
import React from "react";

function Page() {
  const router = useRouter();
  const { q } = router.query as { q?: string };

  console.log(q);
  return (
    <>
      <h1>Search {q}</h1>
    </>
  );
}

export default Page;
