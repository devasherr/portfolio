// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";

function BlogCard({ blog }) {
  return (
    <div className="card bg-base-100 image-full w-[500px] h-[300px] my-5 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{blog.title}</h2>
        <p className="text-md mt-3">{blog.description}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          <span className="text-md">{blog.reading_time_minutes}</span>
          <button className="btn btn-primary">Read</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
