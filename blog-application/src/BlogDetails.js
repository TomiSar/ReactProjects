import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:4000/blogs/${id}`); 
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:4000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('Success: --> Blog removed from DB.')
            history.push('/');
        }).catch(err => {
            console.error('Error: ', err.message);
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading data...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p>Writtten by: {blog.author}</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;