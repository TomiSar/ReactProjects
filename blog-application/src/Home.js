import { useState } from "react";
import BLogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Wed dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
        { title: 'Learn how to code ReactJS', body: 'lorem ipsum...', author: 'Megaman', id: 4 },
    ]);

    // Delete should be done in Home.js component to interact data
    // true id didn't match the argument(keep on array), false if matches the argument (remove from array)
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
 
    return (  
        <div className="home">
            <BLogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BLogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs"/>
        </div>
    );
}
 
export default Home;