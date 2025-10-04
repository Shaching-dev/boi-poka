import React, { use } from "react";

import { Star } from "lucide-react";

const Book = ({ element }) => {
  const { author, bookName, category, image, rating, tags } = element;
  return (
    <div className="card bg-base-100 p-10   shadow-sm">
      <figure className="bg-slate-200 p-10 rounded-[10px] border border-slate-400">
        <img className="w-40 h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="">
        <div className="flex justify-center gap-20 py-3">
          <span>{tags[0]}</span>
          <span>{tags[1]}</span>
        </div>
        <h1 className="text-xl font-semibold py-3">{bookName}</h1>
        <p className="py-3 border-b border-dashed border-gray-400">
          By : {author}
        </p>
        <div className="flex justify-between py-2">
          <h2>{category}</h2>
          <div className="flex gap-5 items-center">
            <span>{rating}</span>
            <span>
              <Star></Star>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
