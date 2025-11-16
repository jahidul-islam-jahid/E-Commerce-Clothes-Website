import React from "react";

function Blog() {
  const blogs = [
    {
      title: "Top Fashion Trends of 2025",
      desc: "Discover the latest styles, colors, and clothing trends that are dominating this year’s fashion industry.",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
      date: "15 Nov 2025",
    },
    {
      title: "How to Choose the Perfect Outfit",
      desc: "A simple guide to help you match fabrics, colors, and styles for any occasion — stay stylish effortlessly.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      date: "10 Nov 2025",
    },
    {
      title: "Clothing Care Tips You Must Know",
      desc: "From washing to storing — learn how to keep your favorite outfits new, fresh, and long-lasting.",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      date: "08 Nov 2025",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">Our Latest Blogs</h1>
          <p className="text-gray-600 mt-3">
            Stay updated with fashion tips, trends, and clothing care guides.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.desc}</p>

                <button className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blog;
