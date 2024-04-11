import { Button } from "@repo/ui/button";
import React from "react";

function page() {
  return (
    <div>
      <Button name="client" />
      <h1 className="text-3xl font-bold underline">Hello world! from client</h1>
    </div>
  );
}

export default page;
