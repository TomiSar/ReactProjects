import BLogList from "./BlogList";
import useFecth from "./useFetch";
//c:\Users\TS\CodeRepos\ReactProjects\blog-application\data>json-server --watch db.json --port 4000 

const Home = ({ setData }) => {
    const { data, isPending, error } = useFecth('http://localhost:4000/blogs');

    // Delete should be done in Home.js component to interact data
    // true id didn't match the argument(keep on array), false if matches the argument (remove from array)
    // const handleDelete = ({id}) => {
    //     const newData = data.filter(data => data.id !== id);
    //     setData(newData);
    // }

    return (  
        <div className="home">
            {/* React evaluation first left side blogs(null/false) --> then evaluates right side*/}
            { error && <div>{error}</div>}
            { isPending && <div>Loading data..</div> }
            { data && <BLogList blogs={data} title="All Blogs"/> } 
            {/* { data && <BLogList blogs={data} title="All Blogs" handleDelete={handleDelete}/> }  */}
            {/* <BLogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;