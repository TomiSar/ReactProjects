import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // event.preventDefault() page doesn't refresh, POST data in db.json except id
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // async and returns A Promise --> when finished log info to console 
    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(blog) 
        })
        .then(res => res.json())
        .then(data => {
            console.log('Success: --> New Blog added in DB.')
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })
        .catch(err => {
            console.error('Error: ', err.message);
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog title:</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                  required
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {/* Add Blog button is shown isPending(false) */}
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Add Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;