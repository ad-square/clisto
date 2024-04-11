import { Button } from "@repo/ui/button";
import { StoreCard } from "@repo/ui/store-card";
import React from "react";

function page() {
  return (
    <div>
      <Button name="client" />
      <StoreCard
        title="na tattoo"
        bannerImgUrl="https://i.pinimg.com/564x/1c/91/5d/1c915d62654e2d277506692a79da3233.jpg"
        logoImgUrl="https://img.freepik.com/free-vector/abstract-design-background_1048-18203.jpg?w=740&t=st=1712838180~exp=1712838780~hmac=45373536d0a921318c9830e221da517c6cbb30859354b46614cfee6d1dbc74d9"
        to="/login"
        location="kb, delhi"
      />
    </div>
  );
}

export default page;
