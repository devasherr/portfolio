// @flow strict
function BlogCard({ blog }) {
  return (
    <div className="relative card bg-base-100 w-full shadow-xl">
      <figure className="absolute inset-0 h-full w-full">
        {blog.cover_image == "" ? (
          <img
            src={`/image/soon.jfif`}
            alt="go_ffmpeg"
            className="object-cover h-full w-full filter blur-sm"
          />
        ) : (
          <img
            src={`/image/${blog.cover_image}`}
            alt="go_ffmpeg"
            className="object-cover h-full w-full filter blur-md"
          />
        )}

        <div className="absolute inset-0 bg-black opacity-60"></div>
      </figure>
      <div className="relative card-body text-white">
        <h2 className="card-title text-xl font-serif">{blog.title}</h2>
        <p className="text-md mt-3">{blog.description}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          <span className="text-md">{blog.reading_time_minutes}</span>
          {blog.url != "" && (
            <a href={blog.url} target="_blank">
              <button className="btn btn-primary">Read</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
