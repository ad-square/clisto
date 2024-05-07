import { Button } from "@repo/ui/button";
import { StoreCard } from "@repo/ui/store-card";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Link href={"/dashBoard"}>
        <h1 className="text-black text-3xl">Stores</h1>
      </Link>
    </>
  );
}

export default page;
