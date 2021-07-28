import React from 'react'


//Create a new file in src folder called Information.js key combination rce
function MyInfo({ name, education, position, number, email }) {
    return (
    <div>
        <div>
            <h1 className="firstline" >Welcome to Tomi's website</h1>
            <p className="aboutme">Hello my name is {name}. I'm live in Helsinki Finland.</p>
            <p className="aboutme">I am  {education} by education, but I work as {position}.</p>
        </div>
        <img className="ownimage" src="https://2sj8jt43nx8s3fh0fpaz8wf7-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/picture-413075-f7332f07443c1f22d024ebadfc926932.jpg" 
         img="tag" alt="linkedInPhoto"/>
        <div>
            <b className="personal">Contact Information</b>
            <ul>
                <li className="information">Mobile phone : {number}</li> 
                <li className="information">Reach me via <a href={`mailto:${email}`}>Gmail</a> </li> 
            </ul>
        </div>
    </div>
    )
}

function LinksToMe() {
    return (
        <div>
            <h3 className="contact">Personal profiles on WEB</h3>
            <ul>
                <ol>
                    <li className="profiles">My account on <a href="https://www.linkedin.com/in/tomi-sarjamo-2394151b/">LinkedIn</a></li>
                    <li className="profiles">My account on <a href="https://github.com/TomiSar">Github</a> </li>
                </ol>
            </ul>        
        </div> 
    )
}

const Information = () => {
        return (
        <div>
            <MyInfo name="Tomi Sarjamo" education="Electronics Design Engineer" position="Software Developer" 
                    number="(+358)-503679695" email="tomppa.sarjamo@gmail.com"/>
            <LinksToMe />
        </div>
        )
}

export default Information
