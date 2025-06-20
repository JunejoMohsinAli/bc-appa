import React from "react";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image: "/assets/blog1.png",
      category: "Workplace",
      title: "Services That Printing At You Is Important",
      author: "Admin",
      date: "Sep 30, 2024",
    },
    {
      image: "/assets/blog2.png",
      category: "Coding",
      title: "A Checklist To Improve Your Daily Routine",
      author: "Admin",
      date: "Sep 30, 2024",
    },
    {
      image: "/assets/blog3.png",
      category: "Technology",
      title: "That Will Help You Get 1% Better Every Day",
      author: "Admin",
      date: "Sep 30, 2024",
    },
  ];

  return (
    <section id="blogs" className="px-6 py-20 lg:px-20 bg-white text-[#282c32]">
      {/* Header */}
      <div className="text-center mb-16">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full font-bold text-sm mb-4"
        >
          Our Blog 🔥
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Recent Articles And Latest Blog
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6">
              {/* Category Tag */}
              <span className="text-[#8670E5] text-sm font-medium bg-[#EFE9FF] px-3 py-1 rounded-full inline-block mb-3">
                {blog.category}
              </span>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-4">{blog.title}</h3>

              {/* Info */}
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <span>👤</span>
                  <span>By {blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
