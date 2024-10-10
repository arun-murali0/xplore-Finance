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
      className={`max-w-[300px] rounded-lg overflow-hidden shadow-lg h-[825] bg-card m-4 ${className}`}
    >
      <Image className="w-full h-48 object-cover " src={dummy} alt={""} />
      <div className="p-6">
        <h5 className="text-lg mb-2 text-muted-foreground">{title}</h5>
        <p className="text-gray-700 mb-4 text-sm">
          <strong>Author:</strong> {author}
        </p>

        <h4 className="font-semibold text-lg mb-2">What You will Learn:</h4>
        <div className="list-disc list-inside text-muted-foreground mb-4">
          {content?.map((list: any, index: any) => {
            return (
              <div key={index}>
                <li className="text-sm leading-5">{list}</li>
              </div>
            );
          })}
        </div>

        <p className="font-semibold text-xl mb-4">
          <strong>Price:</strong> ${price}
        </p>
        <a
          href="#"
          className="block w-full hover:bg-heading bg-primary text-white text-center py-2 rounded transition"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
