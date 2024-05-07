import React from "react";
import { stores } from "../../test/arrays";
import { StoreCard } from "@repo/ui/store-card";

function page() {
  return (
    <div>
      <div className="flex flex-col gap-2 mr-2">
        {stores.map((s) => {
          return <StoreCard {...s} key={s.id} />;
        })}
      </div>
    </div>
  );
}

export default page;
