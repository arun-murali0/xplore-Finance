import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import dummy from "../../../public/dummy.webp";

interface CardProp {
  title: String;
  authName?: String;
}

export const Cards: FC<CardProp> = ({
  title = "some Title",
  authName = "some one",
}) => {
  return (



);
};
