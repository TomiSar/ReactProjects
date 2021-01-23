const BLogList = ({ blogs, title, handleDelete }) => {
    //using props 
    // const blogs = props.blogs;
    // const title = props.title;
    return (
        <div className="blog-list">
            {/* title is parameter from Parent Home.js component */}
            <h2>{ title } total: {blogs.length}</h2>
            {   blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}><strong>Delete Blog</strong></button>
                </div>
            ))}
        </div>
    );
}
 
export default BLogList;