import { Link } from "react-router-dom";

const BLogList = ({ blogs, title }) => {
    //using props 
    // const blogs = props.blogs;
    // const title = props.title;
    return (
        <div className="blog-list">
            {/* title is parameter from Parent Home.js component */}
            <h2>{ title }</h2>
            <h3>Has {blogs.length} blogs total</h3>
            {   blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                      <h2>{blog.title}</h2>
                      <p>Written by: {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BLogList;