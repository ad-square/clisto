"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ name }: any) => {
  return <button className="bg-white">Hello there {name}</button>;
};
