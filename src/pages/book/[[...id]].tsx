import { useRouter } from "next/router";
import React from "react";

function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>Book {id}</div>;
}

export default Page;
