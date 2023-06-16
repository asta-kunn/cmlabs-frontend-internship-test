import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from 'next/link';

export const FoodsCards = ({ idCategory, strCategory, strCategoryThumb }) => {
  return (
    <div className="w-full md:w-[300px] p-5 md:p-8 gap-5 rounded-2xl border-2 flex flex-col justify-center items-center">
      <Link href={`/foods/${strCategory}`}>
        <div
          className="relative w-[200px] h-[200px] rounded-lg overflow-hidden flex justify-center items-center"
          style={{ backgroundImage: `url(${strCategoryThumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h1 className="absolute bottom-0 left-0 px-4 py-2 text-xl font-bold text-white bg-black bg-opacity-70"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
            {strCategory}
          </h1>
        </div>
      </Link>
    </div>
  );
};
