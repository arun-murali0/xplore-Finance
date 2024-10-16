// components/ProductCard.js
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import dummy from "../../../public/dummy.webp";

interface cardProp {
  title: String;
  author: String;
  price?: String;
  imageUrl?: StaticImageData;
  content?: any;
  className?: String;
}

const ProductCard: FC<cardProp> = ({
  title,
  author,
  imageUrl,
  price = 200,
  content,
  className,
}) => {
  return (
    <div
      className={`w-[325px] rounded-lg overflow-hidden shadow-md h-[825] bg-card m-4 ${className}`}
    >
      <Image className="w-full h-48 object-cover " src={dummy} alt={""} />
      <div className="p-6">
        <h5 className="text-lg mb-2 text-muted-foreground max-sm:text-base">
          {title}
        </h5>
        <p className="text-gray-700 mb-4 text-sm max-sm:text-xs">
          <strong>Author:</strong> {author}
        </p>

        <h4 className="font-semibold text-lg mb-2 max-sm:font-normal max-sm:text-base ">
          What You will Learn:
        </h4>
        <div className="list-disc list-inside text-muted-foreground mb-4 max-sm:text-sm">
          {content?.map((list: any, index: any) => {
            return (
              <div key={index}>
                <li className="text-sm leading-5">{list}</li>
              </div>
            );
          })}
        </div>

        <p className="font-semibold text-xl mb-4 max-sm:text-base">
          <span className="font-bold max-sm:font-medium">Price:</span> ${price}
        </p>
        <a
          href="#"
          className="block w-full bg-primary text-card  text-center py-2 rounded transition hover:text-primary-foreground max-sm:text-sm max-sm:py-1"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
