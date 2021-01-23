import { useState, useEffect } from "react";
import BLogList from "./BlogList";
//c:\Users\TS\CodeRepos\ReactProjects\blog-application\data>json-server --watch db.json --port 4000 

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Delete should be done in Home.js component to interact data
    // true id didn't match the argument(keep on array), false if matches the argument (remove from array)
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // useEffect runs on every render by default, dependency is [] runs only on init render (state doesn't change)
    // useEffect always changes when dependency value is changed. useEfect fetch data.
    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:4000/blogs')    //fetch data
          .then(response => {                   //get response object
            if (!response.ok) {
                throw Error('Could not fetch the data from resource');
            }
            return response.json();             //use json method on response 
        })
        .then(data => {                         //use another then method to get data
          setBlogs(data);                       //use data
          setIsPending(false);                   //setIsPenging(false) while data is fetched
          setError(null);
        })
        .catch((error) => {
            setIsPending(false);                 //Do not show Loading data.. if error occurs
            setError(error.message);             //catch any network error messages
        })
      }, 1000);                                 //setTimeout(1000ms) Loading data... then fetch data
    }, []);
 
    return (  
        <div className="home">
            {/* React evaluation first left side blogs(null/false) --> then evaluates right side*/}
            { }
            { error && <div>{error}</div>}
            { isPending && <div>Loading data..</div> }
            { blogs && <BLogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> } 
            {/* <BLogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;